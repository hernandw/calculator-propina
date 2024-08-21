import type { MenuItem } from "../types";

type ItemProps = {
  item: MenuItem;

  addItem: (item: MenuItem) => void;
};

const MenuItem = ({ item, addItem }: ItemProps) => {
  return (
    <button
      className="border-2 border-green-800 hover:bg-green-200 p-3 flex justify-between w-full"
      onClick={() => addItem(item)}
    ><img className="w-24" src={item.images} alt={item.name} />
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
