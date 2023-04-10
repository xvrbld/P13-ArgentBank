import styles from "./User.module.scss";
import Account from "components/account/Account";

function User() {
    return (
      <div className={styles.user}>
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className={styles.edit_button}>Edit Name</button>
        </div>
        <h2 className={styles.sr_only}>Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          amountDescription="Current Balance"
        />
      </div>
    );
  }
  
  export default User;
