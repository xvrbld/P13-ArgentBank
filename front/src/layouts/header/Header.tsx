import styles from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import Logo from "assets/argentBankLogo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  getFirstname,
  removeFirstname,
  removeLastname,
  getToken,
  removeToken,
} from "features/user/userSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

function Header() {
  const dispatch = useAppDispatch();
  const firstname = useAppSelector(getFirstname);
  const token = useAppSelector(getToken);

  function logout() {
    dispatch(removeToken());
    dispatch(removeFirstname());
    dispatch(removeLastname());
  }

  return (
    <div className={styles.header}>
      <nav className={styles.main_nav}>
        <NavLink className={styles.main_nav_logo} to={"/"}>
          <img
            className={styles.main_nav_logo_image}
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.sr_only}>Argent Bank</h1>
        </NavLink>
        {token && token.length > 3 ? (
          <div>
            <Link className={styles.main_nav_item} to="/user">
            <i className={"fa fa-user-circle " + styles.fa}></i>
            <span className={styles.username}>{firstname}</span>
            </Link>
            <Link className={styles.main_nav_item} to="/" onClick={logout}>
              <i className={"fa fa-sign-out " + styles.fa}></i>
              <span className={styles.signout}>Sign Out</span>
            </Link>
          </div>
        ) : (
          <NavLink className={styles.main_nav_item} to={"/login"}>
            <i className={"fa fa-user-circle " + styles.fa}></i>
            <span className={styles.signin}>Sign In</span>
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Header;
