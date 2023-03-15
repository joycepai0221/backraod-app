import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 嚴格模式如果切換成production，就不會在頁面渲染兩次
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
