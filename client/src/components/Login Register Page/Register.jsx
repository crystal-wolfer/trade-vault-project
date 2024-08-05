import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.js";

import * as authAPI from "../../API/authAPI.js";

import styles from "./Register.module.css";
import PasswordIndicator from "./PasswordStrength.jsx";
import ErrorToast from "../Toast Components/ErrorToast.jsx";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [password, setPassword] = useState("");
  const [indicator, setShowIndicator] = useState(false);

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setShowIndicator(true);
  };

  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const {updateAuthState} = useContext(AuthContext)
  const navigate = useNavigate()
 
  const onSubmit = async (data) => {
    const avatar = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Kurt&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Wink&eyebrowType=Angry&mouthType=Twinkle&skinColor=Brown"
    const result = await authAPI.register({...data, avatar });
    
    if (result.status === 409) {
      setError(result.message);
      return;
    }
    
    const {password, confirmPassword, ...userData} = result;
    updateAuthState(userData);
    localStorage.setItem('user', JSON.stringify(userData))
    navigate("/", { state: { message: "Registration successful!"}})
    //setRedirect(true);    
  };

  const handleCloseToast = () => {
    setError(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src="https://i.ibb.co/gwhH2xn/test.png" alt="Background" />
        </div>
        <div className={styles.loginSection}>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h2 className="py-2">Account Register</h2>
            <div className={styles.inputGroup}>
              <input
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    const pattern =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!pattern.test(value)) {
                      return "Email in not valid";
                    }
                    return true;
                  },
                })}
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
            </div>
            <div
              className={`${styles.inputGroup} ${styles.passwordErrorContainer}`}
            >
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                onChange={onPasswordChange}
                type="password"
                placeholder="Password"
              />
              {indicator && (
                <div className="pt-2">
                  <PasswordIndicator password={password} />
                </div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <input
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className={styles.errorMessage}>
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>

            <div className={styles.nameInputGroup}>
              <div className={styles.inputGroupHalf}>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className={styles.errorMessage}>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className={styles.inputGroupHalf}>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  type="text"
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className={styles.errorMessage}>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <button type="submit" className={styles.button} disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Sign Up"}
            </button>

            <span className={styles.infoText}> Already have an account?</span>

            <Link to={"/login"} className={styles.signupLink}>
              Sign In
            </Link>
          </form>
        </div>
      </div>

      {error && (
        <div>
          <ErrorToast error={error} handleCloseToast = {handleCloseToast}/>
        </div>
      )}
      
    </div>
  );
}
