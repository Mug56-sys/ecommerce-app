import { useState } from "react";
import { useNavigate } from "react-router";

export default function Nav() {
  const navigate=useNavigate()
  const [toolTipHidden, setToolTipHidden] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/home") {
      location.reload();
    }else{
      navigate('/home')
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
        onMouseLeave={()=>{
          setToolTipHidden(false)
        }}
      >
        Home
        {!toolTipHidden ? null :<span className="absolute bg-gray-900 text-white mx-8 rounded-full left-[-40px] top-12 text-sm py-1 w-20">{location.pathname === "/home" ? 'Refresh':'Go home'}</span>}
      </button>
      <div className="text-4xl cursor-pointer" onClick={()=>{navigate('/cart')

      }}>🛒</div>
    </div>
  );
}
