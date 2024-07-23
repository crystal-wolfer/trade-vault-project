import { useForm } from "react-hook-form";

import styles from "./Login.module.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
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
                  validate: (value) => {
                    const pattern =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!pattern.test(value)) {
                      return "Email in not valid";
                    }
                    return true;
                  },
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
                  validate: (value) => {
                    const pattern =
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
                type="password"
                placeholder="Password"
                
              />
              {errors.password && (
                <p className="text-red-500 text-sm m-2">
                 Password must include:
                  {errors.password.message.split("\n").map((line, index) => (
                    <span className="text-red-400 text-xs ml-2" key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
            <button type="submit" className={styles.button}>
              Sign In
            </button>

            <span className={styles.infoText}> Don't have an account yet?</span>

            <a href="/register" className={styles.signupLink}>
              Sign Up
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

// https://i.ibb.co/gwhH2xn/test.png
