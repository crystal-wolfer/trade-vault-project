import { useForm } from "react-hook-form";

import styles from "./Register.module.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src="https://i.ibb.co/gwhH2xn/test.png" alt="Background" />
        </div>
        <div className={styles.loginSection}>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h2>Account Register</h2>
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

            <div className={styles.inputGroup}>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
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
                  validate: (value) => {
                    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    if (!pattern.test(value)) {
                      return `
                        - At least 8 characters
                        - 1 uppercase letter
                        - 1 lowercase letter
                        - 1 digit
                        - 1 special character (@$!%*?&)`;
                    }
                    return true;
                  },
                })}
                type="text"
                placeholder="Password"
              />
              {errors.password && (
                <div className={styles.passwordErrorMessage}>
                  <p className={styles.errorMessage}>
                    Password must include:
                    {errors.password.message.split("\n").map((line, index) => (
                      <span className={styles.errorMessageSmall} key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
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
                type="text"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className={styles.errorMessage}>
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>

            <button type="submit" className={styles.button}>
              Sign Up
            </button>

            <span className={styles.infoText}> Already have an account?</span>

            <a href="/login" className={styles.signupLink}>
              Sign In
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

// https://i.ibb.co/gwhH2xn/test.png
