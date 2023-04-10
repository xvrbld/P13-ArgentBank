import styles from "./Account.module.scss";

interface AccountProps {
    title: string;
    amount: string;
    amountDescription: string;
  }

  function Account(props: AccountProps) {
    return (
      <div className={styles.account}>
        <div className={styles.account_content_wrapper}>
          <h3 className={styles.account_title}>{props.title}</h3>
          <p className={styles.account_amount}>{props.amount}</p>
          <p className={styles.account_amount_description}>
            {props.amountDescription}
          </p>
        </div>
        <div className={styles.account_content_wrapper_cta}>
          <button className={styles.transaction_button}>View transactions</button>
        </div>
      </div>
    );
  }
  
  export default Account;
