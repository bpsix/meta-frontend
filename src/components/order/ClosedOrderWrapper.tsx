import styles from "./order.module.css";

export function ClosedOrderWrapper({ children }: { children: JSX.Element[] }) {
  return (
    <div>
      <h1>Order History:</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th className={styles.th}>Transaction Date</th>
            <th className={styles.th}>Ticket Number</th>
            <th className={styles.th}>Symbol</th>
            <th className={styles.th}>Volume</th>
            <th className={styles.th}>Comment</th>
            <th className={styles.th}>Order Type</th>
            <th className={styles.th}>Profit</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <hr />
    </div>
  );
}
