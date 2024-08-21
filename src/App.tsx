import { useState } from "react";
import Header from "./components/Header";

import { menuItems } from "./data/data";
import MenuItem from "./components/MenuItem";
import { useOrder } from "./components/hooks/useOrder";
import OrderContent from "./components/OrderContent";

const App = () => {
  const [data, setData] = useState(menuItems);
  const { addItem, order } = useOrder();

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10">
            {data.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div>
          <div className="space-y-10 border border-dashed border-slate-300 p-5">
            <h2 className="text-4xl font-black">Consumo</h2>
            {order.length === 0 ? (
              <p className="text-2xl text-center">No hay consumos</p>
            ) : (
              order.map((item) => <OrderContent key={item.id} item={item} />)
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
