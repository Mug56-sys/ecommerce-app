import { useEffect, useState } from "react";
import type { ProductList as ProductListType } from "../utils/Types";

export default function Cart({ cart }: { cart: ProductListType }) {
  const Tax = 0.2;
  const [cost, setCost] = useState<number>(0);

  useEffect(() => {
    const FullCost = cart.reduce((acc, prod) => acc + Number(prod.price), 0);
    setCost(FullCost);
  }, [cart]);

  return (
    <div className="w-[60%] border-x h-screen pt-10 mx-auto flex bg-gray-100 px-3">
      <div className="w-80 text-xl mb-10 border rounded-xl p-3 h-fit bg-white shadow">
        <p className="text-2xl font-bold mb-2 text-center border-b pb-1">
          Products
        </p>
        {cart.map((CartProd, index) => (
          <div key={index}>
            <div className="border-b py-3">
              <img src={CartProd.img} className="w-20 inline pr-3"/><span>{CartProd.title} : {CartProd.price}$</span></div>
          </div>
        ))}
        <p className={` text-3xl font-semibold text-center rounded-b-xl`}>
          {cost > 0 ? null : "NO ITEMS"}
        </p>
      </div>
      {cost > 0 ? (
        <>
          <div className="flex-grow"></div>
          <div className="w-50 border text-xl rounded-xl max-h-28 bg-white shadow ">
            <p className="border-b text-center text-3xl">Price Details</p>
            <p className="border-b text-sm font-semibold flex">
              Cost before Tax: <span className="ml-auto mr-1">{cost.toFixed(2)}$</span>
            </p>
            <p className="border-b text-sm font-semibold flex">
              Tax: <span className="ml-auto mr-1">{Tax * 100}%</span>
            </p>
            <p className="border-b text-sm font-semibold flex">
              Cost After Tax: <span className="ml-auto mr-1">{(cost + cost * Tax).toFixed(2)}$</span>
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
