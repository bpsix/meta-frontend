import AccountWrapper from "./components/account/account";
import ClosedOrderWrapper from "./components/order/ClosedOrderWrapper";
import OpenOrderWrapper from "./components/order/OpenOrderWrapper";

export default function App() {
  return (
    <div>
      <AccountWrapper />
      <OpenOrderWrapper />
      <ClosedOrderWrapper />
    </div>
  );
}
