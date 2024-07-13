import { put, call } from "@redux-saga/core/effects";

import appconstant from "../../themes/appconstant";
import { toaster } from "../../utils/Toaster";
import { onError, onFail } from "../../utils/utils";
import {
  ProductManagementListApi,
  ProductActivateApi,
  ProductDuplicateApi,
  ProductEditApi,
} from "../Api";

export function* ProductManagementListSaga(action) {
  try {
    let data = yield call(ProductManagementListApi, action.payload);
    if (data.status === 0) {
      yield put({
        type: appconstant.ProductManagement.ON_LIST_SUCCESS,
        payload: data.result,
      });
    } else {
      yield call(onFail, data.result.message);
    }
  } catch (error) {}
}

export function* ProductDuplicateSaga(action) {
  try {
    let data = yield call(ProductDuplicateApi, action.payload.id);
    if (data.status === 0) {
      toaster(data?.result?.message);
      yield put({
        type: appconstant.ProductManagement.ON_DUPLICATE_SUCCESS,
        payload: data.result,
      });
      yield put({
        type: appconstant.ProductManagement.ON_LIST_LOAD,
        payload: action.payload.data,
      });
    } else {
      yield put({
        type: appconstant.ProductManagement.ON_DUPLICATE_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {}
}

export function* ProductActivateSaga(action) {
  try {
    let data = yield call(ProductActivateApi, action.payload.id);
    if (data.status === 0) {
      toaster(data?.result?.message);
      yield put({
        type: appconstant.ProductManagement.ON_ACTIVATE_SUCCESS,
        payload: data.result,
      });
      yield put({
        type: appconstant.ProductManagement.ON_LIST_LOAD,
        payload: action.payload.data,
      });
    } else {
      yield call(onFail, data.result.message);
    }
  } catch (error) {
    yield call(onError());
  }
}

export function* ProductEditSaga(action) {
  try {
    let data = yield call(ProductEditApi, action.payload.formData);
    if (data.status === 0) {
      toaster(data?.result?.message);
      yield put({
        type: appconstant.ProductManagement.ON_PRODUCT_EDIT_SUCCESS,
        payload: data.result,
      });
      action.payload.navigate("/productManagement");
    } else {
      yield call(onFail, data.result.message);
    }
  } catch (error) {
    yield call(onError());
  }
}
