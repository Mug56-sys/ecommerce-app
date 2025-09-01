import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import "./index.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import type { ProductList } from "./utils/Types";

function App() {
  const [cart,setCart]=useState<ProductList>([])
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);
  

  return (
    <>
      <Nav cart={cart}/>

      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
        <Route path="/products/:PageId" element={<ProductPage setCart={setCart} cart={cart}/>}/>
      </Routes>
    </>
  );
}

export default App;
