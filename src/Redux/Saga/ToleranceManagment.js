import { onError, onFail } from "../../utils/utils";
import { put, call } from "@redux-saga/core/effects";
import appconstant from "../../themes/appconstant";
import { getToleranceApi, orderDetailsApi, setToleranceApi, } from "../Api";
import { toaster } from "../../utils/Toaster";

export function* getToleranceSaga() {
    try {
        let Data = yield call(getToleranceApi);

        if (Data.status === 0) {
            yield put({
                type: appconstant.tolerance.ON_GET_TOLERANCE_SUCCESS,
                payload: Data.result.data,
            });
        } else {
            yield call(onFail, Data.result.message);
        }
    } catch (e) {
        onError(e);
    }
}

export function* setToleranceSaga(action) {
    try {
        let Data = yield call(setToleranceApi, action.payload);

        if (Data.status === 0) {
            toaster(Data.result.message);
            yield call(getToleranceSaga);
        } else {
            yield call(onFail, Data.result.message);
        }
    } catch (e) {
        onError(e);
    }
}

