import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="https://i.ibb.co/Jq987zP/palm-recognition.png" alt="Background" />
      </div>
      <div className={styles.loginSection}>
        <form className={styles.loginForm}>
          <h2>Account Login</h2>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Email" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="password" placeholder="Password" required />
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