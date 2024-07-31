import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.js";

import * as authAPI from "../../API/authAPI.js";

import ErrorToast from "../Toast Components/ErrorToast.jsx";
import styles from "./Login.module.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [error, setError] = useState(null);
  const {updateAuthState} = useContext(AuthContext)
  const [redirect, setRedirect] = useState(false);


  const submitHandler = async (data) => {
    const result = await authAPI.login(data);

    if (result.status === 403) {
      setError(result.message);
      return;
    }

    const {password, ...userData} = result;
    updateAuthState(userData);
    localStorage.setItem('user', JSON.stringify(userData))
    setRedirect(true);    
  };

  const handleCloseToast = () => {
    setError(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img
            src="https://i.ibb.co/Jq987zP/palm-recognition.png"
            alt="Background"
          />
        </div>
        <div className={styles.loginSection}>
          <form
            className={styles.loginForm}
            onSubmit={handleSubmit(submitHandler)}
          >
            <h2>Account Login</h2>
            <div className={styles.inputGroup}>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="text"
                placeholder="Email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm m-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                
              />
              {errors.password && (
                <p className="text-red-500 text-sm m-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Sign In"}
            </button>

            <span className={styles.infoText}> Don't have an account yet?</span>

            <Link to={"/register"} className={styles.signupLink}>
              Sign Up
            </Link>
          </form>
        </div>
      </div>

      {error && (
        <div>
          <ErrorToast error={error} handleCloseToast = {handleCloseToast}/>
        </div>
      )}

      {redirect && <Navigate to={"/"}/>}
    </div>
  );
}

// https://i.ibb.co/gwhH2xn/test.png
