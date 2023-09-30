import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { ItemContextProvider } from "./context/ItemContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ItemContextProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ItemContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
