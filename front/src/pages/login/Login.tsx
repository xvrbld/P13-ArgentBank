import { useState } from "react";
import { useAppDispatch } from "app/hooks";
import { setToken, setFirstname, setLastname } from "features/user/userSlice";
import { Navigate } from "react-router-dom";
import { SignIn, Profile } from "api/Api";
import styles from "./Login.module.scss";

function Login() {
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  async function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const token = await SignIn(email, password);
      if (token) {
        dispatch(setToken({token, rememberMe}));
        setIsLoggedIn(true);
        // After login, get firstname/lastname for user login
        const responseUser = await Profile(token);
        if (responseUser) {
          console.log(responseUser.firstName)
          dispatch(setFirstname(responseUser.firstName));
          dispatch(setLastname(responseUser.lastName));
        }

      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }

  return (
    <div className={styles.login}>
      <div className={styles.login_content}>
        <i className={"fa fa-user-circle " + styles.fa}></i>
        <h1>Sign In</h1>
        <form onSubmit={submitLogin}>
          <div className={styles.input_wrapper}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" id="remember_me" onChange={() => setRememberMe(!rememberMe)} />
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