import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./App.css";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [visibleCart, setIsVisible] = useState(false);

  const setVisibleCart = () => {
    setIsVisible(true);
  };

  const hideCart = () => {
    setIsVisible(false);
  };
  return (
    <CartProvider>
      {visibleCart && <Cart onClose={hideCart} />}
      <Header onVisible={setVisibleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
