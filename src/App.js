import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "../src/css/style.css";
import "../src/css/responsive.css";

import RoutesNew from "./Route/Routes";
import { DispatchFn, navigateFn } from "./utils/utils";

const App = () => {
  let Dispatch = useDispatch();
  let navigate = useNavigate();
  DispatchFn(Dispatch);
  useEffect(() => {
    navigateFn(navigate);
  }, []);
  return <RoutesNew />;
};

export default App;
