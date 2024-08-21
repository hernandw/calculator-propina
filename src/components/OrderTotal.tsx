import { formatCurrency } from "../helpers/formatCurrency";
import { OrderItem } from "../types";


type TotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

const OrderTotal = ({ order, tip, placeOrder }: TotalProps) => {
  const subTotalAmount = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
const propina = subTotalAmount * tip
  const totalAmount = subTotalAmount + propina;
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-black">Totales y Propinas</h2>
      <p>
        Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
      </p>

      <p>
        Propina: <span className="font-bold">{formatCurrency(propina)}</span>
      </p>

      <p>
        Total: <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </p>
      <button className="bg-green-800 text-white p-3 rounded w-full font-bold uppercase" onClick={placeOrder}>Guardar Orden</button>
    </div>
  );
};

export default OrderTotal;
