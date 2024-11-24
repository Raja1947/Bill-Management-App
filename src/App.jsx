import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import AppRoutes from "./Pages/Routes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  );
}

export default App;
