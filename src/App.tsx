import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import "./index.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import type { ProductList } from "./utils/Types";
import Delivery from "./pages/Delivery";
import Method from "./pages/Method";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

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
        <Route path="checkout/delivery" element={<Delivery/>} />
        <Route path="checkout/method" element={<Method/>}/>
        <Route path="checkout/payment" element={<Payment/>}/>
        <Route path="checkout/success" element={<Success/>}/>
      </Routes>
    </>
  );
}

export default App;
