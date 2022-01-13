import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Home from "./pages/Home/Home";
import { useStore } from "./hooks/useStore";
import Cart from "./pages/Cart/Cart";
const App = observer(() => {
  const {
    ProductStore: { fetchProducts },
    CartStore: { getAllProducts },
  } = useStore();
  useEffect(() => {
    fetchProducts();
    const newProducts = JSON.parse(localStorage.getItem("cart") as string)
      ? JSON.parse(localStorage.getItem("cart") as string)
      : [];
    getAllProducts(newProducts);
  }, [fetchProducts, getAllProducts]);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
});

export default App;
