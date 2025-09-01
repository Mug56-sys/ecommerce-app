import {  useState } from "react";
import { useNavigate } from "react-router";
import type { ProductList as ProductListType } from "../utils/Types";
export default function Nav({cart}:{cart:ProductListType}) {
  const navigate = useNavigate();
  const [toolTipHidden, setToolTipHidden] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/home") {
      location.reload();
    } else {
      navigate("/home");
    }
  };
 
  return (
    <div className="bg-red-900 h-20 flex justify-between items-center px-5 top-0">
      <button
        onClick={handleHomeClick}
        className="rounded bg-yellow-300 relative cursor-pointer p-2 hover:bg-yellow-400 "
        onMouseEnter={() => {
          setToolTipHidden(true);
        }}
        onMouseLeave={() => {
          setToolTipHidden(false);
        }}
      >
        Home
        {!toolTipHidden ? null : (
          <span className="absolute bg-gray-900 text-white mx-8 rounded-full left-[-40px] top-12 text-sm py-1 w-20">
            {location.pathname === "/home" ? "Refresh" : "Go home"}
          </span>
        )}
      </button>
      <div
        className="text-4xl cursor-pointer relative"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <span className="relative">🛒</span>
        {Number(cart.length)  ? (
          <span className="absolute text-sm text-white rounded-full bg-red-500  px-[6px] -left-2 -bottom-3">
            {cart.length}
          </span>
        ) : null}
      </div>
    </div>
  );
}
