import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);

  const showCart = () => {
    setCart(true);
  };

  const hideCart = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <div>Cart...</div>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
