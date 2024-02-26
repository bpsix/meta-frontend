import type { OpenOrderType } from "../../lib/types";

export function OpenOrder(props: OpenOrderType) {
  return (
    <tr>
      <td>{new Date(props.time_setup).toLocaleDateString()}</td>
      <td>{props.ticket}</td>
      <td>{props.symbol}</td>
      <td>{props.volume_current}</td>
      <td>{props.comment || "No comment"}</td>
      <td>{props.order_type}</td>
      <td>{props.price_open}</td>
      <td>{props.price_current}</td>
      <td>{props.stop_loss}</td>
      <td>{props.take_profit}</td>
    </tr>
  );
}
