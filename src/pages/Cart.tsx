import { useEffect, useState } from "react";
import type { ProductList as ProductListType } from "../utils/Types";
import {getDate} from '../utils/UtilityFunctions'
import { useNavigate } from "react-router-dom";

export default function Cart({ cart }: { cart: ProductListType }) {
  const navigate=useNavigate()
  const [cost, setCost] = useState<number>(0);
  const [deliveryCost,setDeliveryCost]=useState<number>(0)
  const Tax = 0.2;
  

  useEffect(() => {
    const FullCost = cart.reduce((acc, prod) => acc + Number(prod.price), 0);
      setDeliveryCost(cart.reduce((acc, prod) => acc + JSON.parse(prod.deliveryTime)[1], 0))
    setCost(FullCost);
  }, [cart]);

  return (
    <div className="w-[70%] border-x h-screen pt-10 mx-auto flex bg-gray-100 px-3">
      <div className="w-130 text-xl mb-10 border rounded-xl p-3 h-fit bg-white shadow">
        <p className="text-2xl font-bold mb-2 text-center border-b pb-1">
          Products
        </p>
        {cart.map((CartProd, index) => (
          <div key={index} className="border-b py-3 flex">
            <div className="text-base inline">
              <img src={CartProd.img} className="w-20 inline pr-3"/><span>{CartProd.title} : {CartProd.price}$</span>
              </div>
              <div className="flex-grow"></div>
              <span className="self-center justify-self-end border-x ml-1 text-base ">{getDate(JSON.parse(CartProd.deliveryTime)[0])}</span>
          </div>
        ))}
        <p className={` text-3xl font-semibold text-center rounded-b-xl`}>
          {cost > 0 ? null : "NO ITEMS"}
        </p>
      </div>
      {cost > 0 ? (
        <>
          <div className="flex-grow"></div>
          <div className="w-50 border text-xl rounded-xl max-h-[200px] bg-white shadow flex flex-col">
            <p className="border-b text-center text-3xl">Price Details</p>
            <p className="border-b text-sm font-semibold flex">
              Cost before Tax: <span className="ml-auto mr-1">{cost.toFixed(2)}$</span>
            </p>
            <p className="border-b text-sm font-semibold flex">
              Tax: <span className="ml-auto mr-1">{Tax * 100}%</span>
            </p>
            <p className="border-b text-sm font-semibold flex">
              DeliveryPrice: <span className="ml-auto mr-1">{deliveryCost?.toFixed(2)}$</span>
            </p>
            <p className="border-b text-sm font-semibold flex">
              Cost After Tax: <span className="ml-auto mr-1">{(cost + cost * Tax+deliveryCost).toFixed(2)}$</span>
            </p>
            <button className="text-[11px] border rounded-xl bg-yellow-400 p-2 w-[70%] mt-2 cursor-pointer hover:bg-yellow-500 self-center" onClick={()=>navigate('/checkout/delivery')}>Proceed To Checkout</button>
          </div>
        </>
      ) : null}
    </div>
  );
}
