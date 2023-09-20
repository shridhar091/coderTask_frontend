import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
