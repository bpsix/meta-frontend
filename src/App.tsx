import { useEffect, useState } from "react";
import { AccountType, OpenOrderType, type ClosedOrderType } from "./lib/types";

import { getAccount, getOpenOrders } from "./lib/action";
import Account from "./components/account/account";
import { OpenOrderWrapper } from "./components/order/OpenOrderWrapper";
import { OpenOrder } from "./components/order/OpenOrder";
import { ClosedOrderWrapper } from "./components/order/ClosedOrderWrapper";
import { ClosedOrder } from "./components/order/ClosedOrder";

export default function App() {
  console.log(`Running  in ${import.meta.env.MODE}`);
  const [account, setAccount] = useState<AccountType>({
    balance: 0,
    equity: 0,
    login: -1,
    profit: 0,
    server: "?",
  });
  const [openOrders, setOpenOrders] = useState<OpenOrderType[]>([
    {
      comment: "?",
      order_type: -1,
      price_current: -1,
      price_open: -1,
      stop_loss: -1,
      symbol: "?",
      take_profit: -1,
      ticket: -1,
      time_setup: 0,
      volume_current: -1,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccount();
        setAccount(data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOpenOrders();
        setOpenOrders(data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Account
        balance={account.balance}
        equity={account.equity}
        login={account.login}
        profit={account.profit}
        server={account.server}
      />
      <ClosedOrderWrapper />
      <OpenOrderWrapper>
        {openOrders.map((order, idx) => (
          <OpenOrder
            comment={order.comment}
            order_type={order.order_type}
            price_current={order.price_current}
            price_open={order.price_open}
            stop_loss={order.stop_loss}
            symbol={order.symbol}
            take_profit={order.take_profit}
            ticket={order.ticket}
            time_setup={order.time_setup}
            volume_current={order.volume_current}
            key={idx}
          />
        ))}
      </OpenOrderWrapper>
    </div>
  );
}
