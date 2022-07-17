import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Planning from "./pages/collaboration/planning/index";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={false} path="collaboration/planning" element={<Planning />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
