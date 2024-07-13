import appconstant from "../../../themes/appconstant";
export const ProductManagementAction = (data) => {
    return {
        type: appconstant.OrderManagement.ON_ORDER_LIST_LOAD,
        payload: data
    }
}

export const orderDetailsAction = (data) => {
    return {
        type: appconstant.OrderManagement.ON_ORDER_DETAILS_LOAD,
        payload: data
    }
}