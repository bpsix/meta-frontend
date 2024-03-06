import { useEffect, useState } from "react";
import { ClosedOrderType } from "../../lib/types";
import { getClosedOrders } from "../../lib/action";
import { getFormattedCurrency } from "../../lib/util";
import styles from "./order.module.css";

export default function ClosedOrderWrapper() {
  const [orders, setOrders] = useState<ClosedOrderType[]>([
    {
      comment: "?",
      order_type: -1,
      profit: -1,
      symbol: "?",
      ticket: -1,
      time: 0,
      volume: -1,
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClosedOrders();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.tableWrapper}>
      <h1 className={styles.tableLabel}>Order History</h1>
      <table className={styles.table}>
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
          {orders.map((order) => {
            return (
              <tr className={styles.tr}>
                <td className={styles.td}>{new Date(order.time).toLocaleDateString()}</td>
                <td className={styles.td}>{order.ticket}</td>
                <td className={styles.td}>{order.symbol || "No symbol"}</td>
                <td className={styles.td}>{order.volume}</td>
                <td className={styles.td}>{order.comment || "No comment"}</td>
                <td className={styles.td}>{order.order_type}</td>
                <td className={styles.td}>{getFormattedCurrency(order.profit)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
