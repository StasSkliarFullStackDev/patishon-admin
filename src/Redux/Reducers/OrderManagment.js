import appconstant from "../../themes/appconstant";

const inistialData = {
  orderList: {}
};

const OrderManagementReducer = (state = inistialData, action) => {
  switch (action.type) {
    case appconstant.OrderManagement.ON_ORDER_LIST_SUCCESS:
      return {
        ...state,
        orderList: action.payload,
      };
    case appconstant.OrderManagement.ON_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderList: action.payload,
      };
    default:
      return { ...state }
  }
}

export default OrderManagementReducer
