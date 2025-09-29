import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes"; // if you're using next-themes
import App from "./App";
import Admin from "./pages/Admin"; // make sure path is correct
import Loader from "./pages/Loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider attribute="class">
      <Routes>
        {/* Default website */}
        <Route path="/*" element={<App />} />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/load" element={<Loader />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
