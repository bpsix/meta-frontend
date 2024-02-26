import type { ClosedOrderType } from "../../lib/types";
import { getFormattedCurrency } from "../../lib/util";

export function ClosedOrder(props: ClosedOrderType) {
  return (
    <tr>
      <td>{new Date(props.time).toLocaleDateString()}</td>
      <td>{props.ticket}</td>
      <td>{props.symbol || "No symbol"}</td>
      <td>{props.volume}</td>
      <td>{props.comment || "No comment"}</td>
      <td>{props.order_type}</td>
      <td>{getFormattedCurrency(props.profit)}</td>
    </tr>
  );
}
