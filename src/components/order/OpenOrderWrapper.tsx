import { useEffect, useState } from "react";
import styles from "./order.module.css";
import { OpenOrderType } from "../../lib/types";
import { getOpenOrders } from "../../lib/action";

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
        <tbody>
          {orders.map((order) => {
            return (
              <tr>
                <td>{new Date(order.time_setup).toLocaleDateString()}</td>
                <td>{order.ticket}</td>
                <td>{order.symbol}</td>
                <td>{order.volume_current}</td>
                <td>{order.comment || "No comment"}</td>
                <td>{order.order_type}</td>
                <td>{order.price_open}</td>
                <td>{order.price_current}</td>
                <td>{order.stop_loss}</td>
                <td>{order.take_profit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
}
