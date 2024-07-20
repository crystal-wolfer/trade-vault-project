import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src="https://i.ibb.co/gwhH2xn/test.png" alt="Background" />
        </div>
        <div className={styles.loginSection}>
          <form className={styles.loginForm}>
            <h2>Account Register</h2>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Email" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Password" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Confirm password" required />
            </div>
            <div className={styles.nameInputGroup}>
              <div className={styles.inputGroupHalf}>
                <input type="text" placeholder="First name" required />
              </div>
              <div className={styles.inputGroupHalf}>
                <input type="text" placeholder="Last name" required />
              </div>
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
