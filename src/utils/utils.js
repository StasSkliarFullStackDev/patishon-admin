import { put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import { isInternetConnected } from "../common";
import appconstant from "../themes/appconstant";
import { toaster } from "./Toaster";

var dispatch;
var navigate;

//*** this fn is use to make the first letter of the word in captial */

export const FirstLetterUpperCase = (data) => {
  return data ? data.charAt(0).toUpperCase() + data.slice(1) : "";
};

//**** this is the dispatch which call in the ervery render of the App component and give the value of dispatch */
export const DispatchFn = (data) => {
  dispatch = data;
};
//******** this fn is call when we need too dispatch the action  */

export const Dispatched = (action) => {
  isInternetConnected && dispatch(action);
};

//***** this functiion is call in the App  like above dispatch fn  */
export const navigateFn = (data) => {
  navigate = data;
};

//***** this function is call when we need to navigate  */
export const navigatorFn = (to) => {
  navigate(to);
};

//***** Both Error and the Fail function is called in the Saga file when api get fail or get in the catch   */

export function* onError(e) {
  yield put({ type: appconstant.ON_API_FAIL });
  toaster(appconstant.ERROR_MSG);
}

export function* onFail(message) {
  toast.error(message, { toastId: 1 });
  yield put({ type: appconstant.ON_API_FAIL });
}
