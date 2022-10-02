import { formatCurrencey } from "../utils/formatter";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
  return (
    <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg object-cover h-80 w-full"
        src={imgUrl}
        alt={name}
      />

      <div className="p-2">
        <div className="p-4 flex justify-between">
          <h1 className="font-bold text-3xl">{name}</h1>
          <h3 className="text-gray-400">{formatCurrencey(price)}</h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          {quantity === 1? (
            <>
              <div className="flex justify-center items-center p-4">
                <button className=" h-10 w-10 rounded bg-blue-600 text-white">
                  +
                </button>
                <h2 className="px-2">
                  <span className="text-2xl">{quantity}</span> in cart
                </h2>
                <button className=" h-10 w-10 rounded bg-blue-600 text-white">
                  -
                </button>
              </div>

              <button className=" h-10 w-20 rounded bg-red-600 text-white ">
                Remove
              </button>
            </>
          ) : (
            <>
              <button className=" h-10 w-full rounded bg-blue-600 text-white ">
                Add to cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
