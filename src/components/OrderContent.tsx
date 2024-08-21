import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers/formatCurrency";

type OrderItemProps = {
  item: OrderItem;
  removeItem: (id: number) => void;
};

const OrderContent = ({ item, removeItem }: OrderItemProps) => {
  return (
    <div className="flex justify-between border-t border-gray-200 py-5 last-of-type: border-b items-center">
      <div>
      <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
      <p className="font-black">Cantidad: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}</p>
      </div>
    <button className="bg-red-600 w-8 h-8 rounded-full text-white font-black" onClick={() => removeItem(item.id)}>X</button>
    </div>
  );
};

export default OrderContent;
