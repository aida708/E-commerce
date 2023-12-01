import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//configure Auth0Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
//place the FilterProvider inside  of the ProductsProvider

root.render(
  <Auth0Provider
    domain="dev-lwjue4h2qjs3hdlg.us.auth0.com"
    clientId="BiLUsw8DvQXHHsZbgkDBLvoVzx3ztk6i"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);

//dev-lwjue4h2qjs3hdlg.us.auth0.com
//rt7kT2lm1huFEunexFhioElEIyzPChz4
