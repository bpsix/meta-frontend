import { useEffect, useState } from "react";
import { OpenOrderType } from "../../lib/types";
import { getOpenOrders } from "../../lib/action";
import styles from "./order.module.css";

export default function OpenOrderWrapper() {
  const [orders, setOrders] = useState<OpenOrderType[]>([
    {
      comment: "?",
      order_type: 0,
      price_current: 0,
      price_open: 0,
      stop_loss: 0,
      symbol: "?",
      take_profit: 0,
      ticket: 0,
      time_setup: 0,
      volume_current: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOpenOrders();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.tableWrapper}>
      <h1 className={styles.tableLabel}>Open Orders</h1>
      <table className={styles.table}>
        <thead className={styles.thead}>
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
        <tbody>
          {orders.map((order) => {
            return (
              <tr className={styles.tr}>
                <td className={styles.td}>{new Date(order.time_setup).toLocaleDateString()}</td>
                <td className={styles.td}>{order.ticket}</td>
                <td className={styles.td}>{order.symbol}</td>
                <td className={styles.td}>{order.volume_current}</td>
                <td className={styles.td}>{order.comment || "No comment"}</td>
                <td className={styles.td}>{order.order_type}</td>
                <td className={styles.td}>{order.price_open}</td>
                <td className={styles.td}>{order.price_current}</td>
                <td className={styles.td}>{order.stop_loss}</td>
                <td className={styles.td}>{order.take_profit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
