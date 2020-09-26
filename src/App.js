import React from "react";
import Routes from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import CarritoContextProvider from "./context/carritoContext";
import AuthContextProvider from "./context/authContext";

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CarritoContextProvider>
          <div>
          <Switch>
                <Routes />
              </Switch>
          </div>
        </CarritoContextProvider>
      </AuthContextProvider>
    </Router>
  );
}
