import appconstant from "../../../themes/appconstant"

export const getToleranceAction = () => {
    return {
        type: appconstant.tolerance.ON_GET_TOLERANCE_LOAD,
    }
}

export const setToleranceAction = (data) => {
    return {
        type: appconstant.tolerance.ON_SET_TOLERANCE_LOAD,
        payload: data
    }
}
