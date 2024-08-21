
import type { OrderItem } from "../types";

type OrderItemProps = {
  item: OrderItem
}

const OrderContent = ({item}: OrderItemProps) => {
  return (
    <div>
 <h2>{item.name}</h2>     
      </div>
  )
}

export default OrderContent