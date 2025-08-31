import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import "./index.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:PageId" element={<ProductPage/>}/>
      </Routes>
    </>
  );
}

export default App;
