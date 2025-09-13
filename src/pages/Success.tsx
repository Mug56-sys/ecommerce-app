import { useNavigate } from "react-router-dom";

export default function Success() {
;

  const navigate = useNavigate();

  return (
    <>
      <div className="justify-self-center w-[50%]  h-screen border-x bg-gray-200 flex flex-col items-center ">
        <div className="mt-4 flex justify-self-center w-[70%] self-center flex-col">
          <p className="text-3xl font-black text-center">Thanks for shopping with us</p>
          <h1 className="text-5xl font-black text-center">🎉 🎉 🎉</h1>
          
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="border w-[50%] text-2xl bg-blue-500 text-white border-black rounded-xl font-semibold py-1 mt-5 self-center cursor-pointer hover:bg-blue-600"
          >
            Search Products
          </button>
        </div>
      </div>
    </>
  );
}
