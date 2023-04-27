import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./User.module.scss";
import Account from "components/account/Account";
import {
  getFirstname,
  getLastname,
  getToken,
  setFirstname,
  setLastname,
} from "features/user/userSlice";
import { Profile, Edit } from "api/Api";

function User() {
  const dispatch = useDispatch();
  const firstname = useSelector(getFirstname);
  const lastname = useSelector(getLastname);
  const token = useSelector(getToken);

  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const responseUser = await Profile(token);
      if (responseUser) {
        dispatch(setFirstname(responseUser.firstName));
        dispatch(setLastname(responseUser.lastName));
      }
    };
    if (token && firstname.length < 2) {
      fetchUser();
    }
  }, [dispatch, firstname, lastname, token]);

  return (
    <div className={styles.user}>
      <div className={styles.header}>
        {isEditModeOn ? (
          <>
            <h1>Welcome back</h1>
            <div className={styles.editMode}>
              <div className={styles.inputs}>
                <input
                  className={styles.inputFirstName}
                  type="text"
                  placeholder={firstname}
                  onChange={(e) => setNewFirstname(e.target.value)}
                />
                <input
                  className={styles.inputLastName}
                  type="text"
                  placeholder={lastname}
                  onChange={(e) => setNewLastname(e.target.value)}
                />
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.saveButton}
                  onClick={async () => {
                    try {
                      const response = await Edit(
                        newFirstname,
                        newLastname,
                        token
                      );
                      dispatch(setFirstname(response.firstName));
                      dispatch(setLastname(response.lastName));
                      setIsEditModeOn(false);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Save
                </button>
                <button
                  className={styles.cancelButton}
                  onClick={() => {
                    setIsEditModeOn(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {firstname} {lastname} !
            </h1>
            <button
              className={styles.edit_button}
              onClick={() => {
                setIsEditModeOn(true);
                setNewFirstname(firstname);
                setNewLastname(lastname);
              }}
            >
              Edit Name
            </button>
          </>
        )}
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
