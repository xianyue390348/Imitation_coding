import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Planning from "./pages/collaboration/planning/index";
import "antd/dist/antd.less";
import { Provider } from "mobx-react";
import appStore from "./store/appStore";
import { configure } from "mobx"
const root = ReactDOM.createRoot(document.getElementById("root")!);

const stores = {appStore}
configure({enforceActions: 'always'})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider {...stores}>
        <Routes>
          <Route
            index={false}
            path="/collaboration/planning"
            element={<Planning />}
          ></Route>
          <Route
            path="*"
            element={<Navigate replace to="/collaboration/planning" />}
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
