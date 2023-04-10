import styles from "./Login.module.scss";

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.login_content}>
        <i className={"fa fa-user-circle " + styles.fa}></i>
        <h1>Sign In</h1>
        <form>
          <div className={styles.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={styles.sign_in_button}>Sign In</button>
          {/*PLACEHOLDER DUE TO STATIC SITE
          <a href="./user.html" class="sign-in-button">Sign In</a>
          <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
  <!--  -->*/}
        </form>
      </div>
    </div>
  );
}

export default Login;
