import { useEffect, useState } from "react";
import type { MenuItem, OrderItem } from "../../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>(
    JSON.parse(localStorage.getItem("order") || "[]")
  );
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0)

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  });
  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists) {
      const newOrder = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });
      setOrder(newOrder);
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(newOrder);
  };

  return {
    addItem,
    order,
    removeItem,
    total,
    setTotal,
    tip,
    setTip
  };
};
