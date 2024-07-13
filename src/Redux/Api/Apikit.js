import appconstant from "../../themes/appconstant";
import axios from "axios";
import {  Store } from "../Store";

let APIKit = axios.create({
    baseURL: appconstant.SERVER_URL,
    timeout: 600000,
});

APIKit.interceptors.request.use(async (config) => {
    const token =Store?.getState().AuthReducer?.token
    if (token) {
        config.headers.AUTHORIZATION = `Bearer ${token}`;
    }
    return config;
});
export default APIKit;
