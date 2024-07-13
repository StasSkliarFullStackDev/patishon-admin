import appconstant from "../../../themes/appconstant";
export const ProductManagementAction = (data) => {
    return {
        type: appconstant.ProductManagement.ON_LIST_LOAD,
        payload: data
    }
}
export const ProductActivateAction = (data) => {
    return {
        type: appconstant.ProductManagement.ON_ACTIVATE_LOAD,
        payload: data
    }
}
export const ProductDuplicateAction = (data) => {
    return {
        type: appconstant.ProductManagement.ON_DUPLICATE_LOAD,
        payload: data
    }
}
export const EditProductAction = (data) => {
    return {
        type: appconstant.ProductManagement.ON_PRODUCT_EDIT_LOAD,
        payload: data
    }
}
export const PageOffSetReset = () => {
    return {
        type: appconstant.ProductManagement.PAGE_OFFSET_RESET,
    }
}

