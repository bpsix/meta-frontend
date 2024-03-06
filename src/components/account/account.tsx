import { useEffect, useState } from "react";
import { AccountType } from "../../lib/types";
import { getFormattedCurrency } from "../../lib/util";
import { getAccount } from "../../lib/action";
import styles from "./account.module.css";

export default function AccountWrapper() {
  const [account, setAccount] = useState<AccountType>({
    balance: 0,
    equity: 0,
    login: 0,
    profit: 0,
    server: "?",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccount();
        setAccount(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.accountWrapper}>
      <p className={styles.accountItem}>Login</p> <p>{account.login}</p>
      <hr />
      <p className={styles.accountItem}>Server</p> <p>{account.server}</p>
      <hr />
      <p className={styles.accountItem}>Profit</p> <p>{getFormattedCurrency(account.profit)}</p>
      <hr />
      <p className={styles.accountItem}>Equity</p> <p>{getFormattedCurrency(account.equity)}</p>
      <hr />
      <p className={styles.accountItem}>Balance</p> <p>{getFormattedCurrency(account.balance)}</p>
    </div>
  );
}
