import { useEffect, useState } from "react";
import { ClosedOrderType } from "../../lib/types";
import { getClosedOrders } from "../../lib/action";

import styles from "./order.module.css";
import { getFormattedCurrency } from "../../lib/util";

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
          {orders.map((order) => {
            return (
              <tr>
                <td>{new Date(order.time).toLocaleDateString()}</td>
                <td>{order.ticket}</td>
                <td>{order.symbol || "No symbol"}</td>
                <td>{order.volume}</td>
                <td>{order.comment || "No comment"}</td>
                <td>{order.order_type}</td>
                <td>{getFormattedCurrency(order.profit)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
