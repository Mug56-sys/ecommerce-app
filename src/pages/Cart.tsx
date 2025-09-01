import { useEffect, useState } from "react";
import type { ProductList as ProductListType } from "../utils/Types";

export default function Cart({cart}:{cart:ProductListType}) {
  const [cost,setCost]=useState<number>(0)
 
  
  useEffect(()=>{
  const FullCost=cart.reduce((acc,prod)=>acc+Number(prod.price),0)
     setCost(FullCost)
  },[cart])


 
  return (
    <div className="justify-self-center w-80 text-xl mt-10 border">
      
      {cart.map((CartProd)=>{
        return <div ><p className="border-b">{CartProd.title} : {CartProd.price}$</p></div> 

        
      })}
      <p className={`${cost>0 ?`bg-green-200`: null} text-3xl font-semibold`}>Full Cost: {cost>0 ? cost.toFixed(2)+'$': 'NO ITEMS'}</p>
    </div>
  )
}
