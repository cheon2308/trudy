import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { AuthContextProvider } from "./Common/authContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
axios.defaults.withCredentials = true;
root.render(
  <AuthContextProvider>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
