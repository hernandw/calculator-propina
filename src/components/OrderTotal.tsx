import { formatCurrency } from "../helpers/formatCurrency";
import { OrderItem } from "../types";

type TotalProps = {
  order: OrderItem[];



};

const OrderTotal = ({order}: TotalProps) => {

  const totalAmount = order.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-black">Totales y Propinas</h2>
      <p>Subtotal a pagar: <span>{formatCurrency(totalAmount)}</span></p>
      
      <p>Propina: <span>{formatCurrency(0)}</span></p>
      
      <p>Total: <span>{formatCurrency(0)}</span></p>
      
    </div>
  );
};

export default OrderTotal;
