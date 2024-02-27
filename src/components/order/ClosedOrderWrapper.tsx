import { ClosedOrderType } from "../../lib/types";
import { getFormattedCurrency } from "../../lib/util";
import styles from "./order.module.css";

interface Props {
  closedOrders: ClosedOrderType[];
}

export function ClosedOrderWrapper(props: Props) {
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
        <tbody>
          {props.closedOrders.map((order) => (
            <tr>
              <td>{new Date(order.time).toLocaleDateString()}</td>
              <td>{order.ticket}</td>
              <td>{order.symbol || "No symbol"}</td>
              <td>{order.volume}</td>
              <td>{order.comment || "No comment"}</td>
              <td>{order.order_type}</td>
              <td>{getFormattedCurrency(order.profit)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}
