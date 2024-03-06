import AccountWrapper from "../account/account";
import ClosedOrderWrapper from "../order/ClosedOrderWrapper";
import OpenOrderWrapper from "../order/OpenOrderWrapper";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.navbar}>
        <h1 className={styles.title}>Trader Logs</h1>
      </div>
      <div className={styles.sidebar}>
        <AccountWrapper />
      </div>
      <div className={styles.mainContent}>
        <OpenOrderWrapper />
        <ClosedOrderWrapper />
      </div>
    </div>
  )
}
