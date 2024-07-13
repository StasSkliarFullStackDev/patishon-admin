import { onError, onFail } from "../../utils/utils";
import { put, call } from "@redux-saga/core/effects";
import appconstant from "../../themes/appconstant";
import { orderDetailsApi, orderListApi } from "../Api";

export function* OrderListSaga(action) {
    try {
        let Data = yield call(orderListApi, action.payload);

        if (Data.status === 0) {
            yield put({
                type: appconstant.OrderManagement.ON_ORDER_LIST_SUCCESS,
                payload: Data.result.data,
            });
        } else {
            yield call(onFail, Data.result.message);
        }
    } catch (e) {
        onError(e);
    }
}

export function* orderDetailsSaga(action) {
    try {
        let Data = yield call(orderDetailsApi, action.payload);

        if (Data.status === 0) {
            yield put({
                type: appconstant.OrderManagement.ON_ORDER_DETAILS_SUCCESS,
                payload: Data.result.data,
            });
        } else {
            yield call(onFail, Data.result.message);
        }
    } catch (e) {
        onError(e);
    }
}

