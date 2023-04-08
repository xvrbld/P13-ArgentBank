import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "assets/argentBankLogo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
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
        <NavLink className={styles.main_nav_item} to={"/login"}>
          <i className={"fa fa-user-circle " + styles.fa}></i>
          Sign In
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
