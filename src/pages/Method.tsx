import { useNavigate } from "react-router-dom";
import CheckoutNav from "../components/CheckoutNav";

export default function Method({setMethod}:{setMethod:React.Dispatch<React.SetStateAction<string>>}) {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="justify-self-center w-[50%]  h-screen border-x bg-gray-200 flex flex-col items-center ">
        <CheckoutNav stage={2} />
        <div className="mt-20 flex justify-self-center w-[70%] self-center flex-col ">
          <p className="text-3xl font-black text-center">Choose Your payment method</p>
          <select className="bg-white w-[30%] text-xl flex my-3 self-center border" onChange={(e)=>setMethod(e.target.value )}>
            <option >Paypal</option>
            <option>Card Payment</option>
            <option>Apple Pay</option>
            <option>Google Pay</option>
          </select>
          <button
            onClick={() => {
              navigate("/checkout/payment");
            }}
            className="border w-[50%] text-2xl bg-blue-500 text-white border-black rounded-xl font-semibold py-1 mt-5 self-center cursor-pointer hover:bg-blue-600"
          >
            Pick
          </button>
        </div>
      </div>
    </>
  );
}
