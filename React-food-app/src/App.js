import React, { useState } from "react";
// import { Fragment } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Auth0Provider domain="dev-4hboagaifh4ttizs.us.auth0.com" clientId="bFMLs4RnX5FtdKwK2agzixg3JbhXeyW6" redirectUri={window.location.origin}>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </Auth0Provider>
  );
}

export default App;
