// // constant
import appconstant from "../../themes/appconstant";

const instialValue = {
  isLoading: false,
  data: [],
  paginateData: {},
  isActivate: false,
};
export const ProductManagementReducer = (state = instialValue, action) => {
  switch (action.type) {
    case appconstant.ProductManagement.ON_LIST_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case appconstant.ProductManagement.ON_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload?.data,
        paginateData: action.payload?.pagination,
      };
    case appconstant.ProductManagement.ON_LIST_FAIL:
      return {
        ...state,
        data: [],
        paginateData: {},
      };
    case appconstant.ProductManagement.ON_ACTIVATE_LOAD:
      return {
        ...state,
        isLoading: true,
        isActivateSuccess: false,
      };

    case appconstant.ProductManagement.ON_ACTIVATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isActivateSuccess: true,
      };
    case appconstant.ProductManagement.ON_ACTIVATE_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case appconstant.ProductManagement.ON_DUPLICATE_LOAD:
      return {
        ...state,
        isLoading: true,
        isActivateSuccess: false,
      };

    case appconstant.ProductManagement.ON_DUPLICATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isActivateSuccess: true,
      };
    case appconstant.ProductManagement.ON_DUPLICATE_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case appconstant.ProductManagement.ON_PRODUCT_EDIT_LOAD:
      return {
        ...state,
        isLoading: true,
        isActivateSuccess: false,
      };

    case appconstant.ProductManagement.ON_PRODUCT_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isActivateSuccess: true,
      };
    case appconstant.ProductManagement.ON_PRODUCT_EDIT_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case appconstant.ProductManagement.PAGE_OFFSET_RESET:
      return {
        ...state,
        paginateData: {},
      };
    default:
      return state;
  }
};
