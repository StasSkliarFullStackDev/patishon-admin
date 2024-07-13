import { combineReducers } from "redux";
import { ProductManagementReducer } from "./ProductManagement";
import configReducer from "./configManagment";
import OrderManagementReducer from "./OrderManagment";
import ToleranceManagementReducer from "./ToleranceManagment";

const rootReducer = combineReducers({
  ProductManagementReducer,
  configReducer,
  OrderManagementReducer,
  ToleranceManagementReducer
});

export default rootReducer;
