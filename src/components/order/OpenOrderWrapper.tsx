import styles from "./order.module.css";

export function OpenOrderWrapper({ children }: { children: JSX.Element[] }) {
  return (
    <div>
      <h1>Open Orders:</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th className={styles.th}>Opened At</th>
            <th className={styles.th}>Ticket</th>
            <th className={styles.th}>Symbol</th>
            <th className={styles.th}>Current Volume</th>
            <th className={styles.th}>Comment</th>
            <th className={styles.th}>Order Type</th>
            <th className={styles.th}>Opening Price</th>
            <th className={styles.th}>Current Price</th>
            <th className={styles.th}>Stop Loss</th>
            <th className={styles.th}>Take Profit</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <hr />
    </div>
  );
}
