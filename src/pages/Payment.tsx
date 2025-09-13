import { useNavigate } from "react-router-dom";
import CheckoutNav from "../components/CheckoutNav";

export default function Payment({method}:{method:string}) {

  const navigate = useNavigate();
 

  return (
    <>
      <div className="justify-self-center w-[50%]  h-screen border-x bg-gray-200 flex flex-col items-center ">
        <CheckoutNav stage={3} />
        <div className="mt-20 flex justify-self-center w-[70%] self-center flex-col ">
          <p>Your method {method}:Temporary</p>
          <button
            onClick={() => {
              navigate("/checkout/success");
            }}
            className="border w-[50%] text-2xl bg-blue-500 text-white border-black rounded-xl font-semibold py-1 mt-5 self-center cursor-pointer hover:bg-blue-600"
          >
            Finish
          </button>
        </div>
      </div>
    </>
  );
}
