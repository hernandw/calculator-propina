import { useEffect, useState } from "react";
import type { MenuItem, OrderItem } from "../../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>(
    JSON.parse(localStorage.getItem("order") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  })
  const addItem = (item: MenuItem) => {
    /* const newItem = { ...item, quantity: 1 };
    if(!order.some(orderItem => orderItem.id === item.id)) {
      setOrder([...order, newItem]);
    }

    if(order.some(orderItem => orderItem.id === item.id)) {
      const newOrder = order.map(orderItem => {
        if(orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });
      setOrder(newOrder);
    } 
  };
  */
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

  return {
    addItem,
    order
  };
};
