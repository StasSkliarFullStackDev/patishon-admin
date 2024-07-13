import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//redux
import { Provider } from "react-redux";
import { Store, persistor } from "./Redux/Store";

//PERSIST
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

//ui
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from 'react-router-dom';
//constant
import appconstant from "./themes/appconstant";

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <ToastContainer autoClose={appconstant.toastTimer} />
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
