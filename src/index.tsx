import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Planning from "./pages/collaboration/planning/index";
import 'antd/dist/antd.less'

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={false} path="/collaboration/planning" element={<Planning />}></Route>
        <Route path="*" element={<Navigate replace to="/collaboration/planning" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
