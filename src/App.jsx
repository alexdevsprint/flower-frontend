import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";

import ShopPage from "./pages/ShopPage/ShopPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/shopping-cart">Shopping Cart</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
