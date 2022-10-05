import { StoreItem } from "../components/StoreItem";
import storedItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1 className='text-center text-2xl p-8'>Store</h1>
      {
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 md:grid-cols-3 place-items-center">
          {storedItems.map((item) => (
            <StoreItem key={item.id} {...item}/>
          ))}
        </div>
      }
    </>
  );
}
