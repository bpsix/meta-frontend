import { useEffect, useState } from "react";
import { AccountType } from "../../lib/types";
import { getFormattedCurrency } from "../../lib/util";

import styles from "./acc.module.css";
import { getAccount } from "../../lib/action";

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
    <div className={styles.container}>
      <div>Login({account.login})</div>
      <div>Balance({getFormattedCurrency(account.balance)})</div>
      <div>Equity({getFormattedCurrency(account.equity)})</div>
      <div>Profit({getFormattedCurrency(account.profit)})</div>
      <div>Server({account.server})</div>
    </div>
  );
}
