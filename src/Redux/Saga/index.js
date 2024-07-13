import { all, takeEvery } from "@redux-saga/core/effects";

//redux Constant
import appconstant from "../../themes/appconstant";
import { RoomSizeEditSaga, RoomSizeSaga, panelViewSaga, panelUpdateSaga, frameTypeListSaga, frameVariantListSaga, frameTypeActiveDeactiveSaga, frameVariantActiveDeactiveSaga, frameVariantDefaultSaga, frameTypeUpdateSaga, frameAddSaga, doorGlassListSaga, deleteFrameVariantSaga, doorSizeListSaga, doorGlassEditSaga, doorChannelListSaga, doorTypeEnableDisableSaga, doorSizeEnableDisableSaga, doorChannelEditSaga, handleVariantListSaga, handleVariantActiveDeactiveSaga, handleVariantDefaultSaga, doorCategoryAndHingesListSaga, doorCategoryEnableDisableSaga, doorHingesActiveDeactiveSaga, handleEditSaga, doorGlassActiveDeactiveSaga, filmListSaga, filmActivateDeactivateSaga, deleteFilmSaga, addFilmSaga, filmUpdateSaga, filmDisableEnableSaga } from "./ConfigManagment";
import { orderDetailsSaga, OrderListSaga } from "./OrderManagment";
//saga file
import {
  ProductActivateSaga,
  ProductManagementListSaga,
  ProductDuplicateSaga,
  ProductEditSaga,
} from "./productManagement";
import { getToleranceSaga, setToleranceSaga, } from "./ToleranceManagment";

export function* rootSaga() {
  yield all([
    yield takeEvery(
      appconstant.ProductManagement.ON_LIST_LOAD,
      ProductManagementListSaga
    ),
    yield takeEvery(
      appconstant.ProductManagement.ON_ACTIVATE_LOAD,
      ProductActivateSaga
    ),
    yield takeEvery(
      appconstant.ProductManagement.ON_DUPLICATE_LOAD,
      ProductDuplicateSaga
    ),
    yield takeEvery(
      appconstant.ProductManagement.ON_PRODUCT_EDIT_LOAD,
      ProductEditSaga
    ),
    yield takeEvery(appconstant.config.ON_VIEW_ROOM_SIZE_LOAD, RoomSizeSaga),
    yield takeEvery(
      appconstant.config.ON_EDIT_ROOM_SIZE_LOAD,
      RoomSizeEditSaga
    ),
    yield takeEvery(appconstant.config.ON_VIEW_PANEL_LOAD, panelViewSaga),
    yield takeEvery(appconstant.config.ON_UPDATE_PANEL_LOAD, panelUpdateSaga),
    yield takeEvery(appconstant.config.ON_FRAME_TYPE_LIST_LOAD, frameTypeListSaga),
    yield takeEvery(appconstant.config.ON_FRAME_VARIANT_LIST_LOAD, frameVariantListSaga),
    yield takeEvery(appconstant.config.ON_FRAME_TYPE_ACTIVE_DEACTIVE_LOAD, frameTypeActiveDeactiveSaga),
    yield takeEvery(appconstant.config.ON_FRAME_VARIANT_ACTIVE_DEACTIVE_LOAD, frameVariantActiveDeactiveSaga),
    yield takeEvery(appconstant.config.ON_FRAME_VARIANT_DEFAULT_LOAD, frameVariantDefaultSaga),
    yield takeEvery(appconstant.config.ON_FRAME_TYPE_UPDATE_LOAD, frameTypeUpdateSaga),
    yield takeEvery(appconstant.config.ON_FRAME_ADD_LOAD, frameAddSaga),
    yield takeEvery(appconstant.config.ON_DOOR_GLASS_LIST_LOAD, doorGlassListSaga),
    yield takeEvery(appconstant.config.ON_FRAME_DELETE_VARIANT_COLOR, deleteFrameVariantSaga),
    yield takeEvery(appconstant.config.ON_DOOR_SIZE_LIST_LOAD, doorSizeListSaga),
    yield takeEvery(appconstant.config.ON_DOOR_GLASS_EDIT_LOAD, doorGlassEditSaga),
    yield takeEvery(appconstant.config.ON_DOOR_GLASS_ACTIVE_DEACTIVE_LOAD, doorGlassActiveDeactiveSaga),
    yield takeEvery(appconstant.config.ON_DOOR_CHANNEL_LIST_LOAD, doorChannelListSaga),
    yield takeEvery(appconstant.config.ON_DOOR_TYPE_ENABLE_DISABLE_LOAD, doorTypeEnableDisableSaga),
    yield takeEvery(appconstant.config.ON_DOOR_SIZE_ENABLE_DISABLE_LOAD, doorSizeEnableDisableSaga),
    yield takeEvery(appconstant.config.ON_DOOR_CHANNEL_EDIT_LOAD, doorChannelEditSaga),
    yield takeEvery(appconstant.config.ON_HANDLE_VARIANT_LIST_LOAD, handleVariantListSaga),
    yield takeEvery(appconstant.config.ON_HANDLE_VARIANT_ACTIVE_DEACTIVE_LOAD, handleVariantActiveDeactiveSaga),
    yield takeEvery(appconstant.config.ON_HANDLE_VARIANT_DEFAULT_LOAD, handleVariantDefaultSaga),
    yield takeEvery(appconstant.config.ON_DOOR_CATEGORY_AND_HINGES_LIST_LOAD, doorCategoryAndHingesListSaga),
    yield takeEvery(appconstant.config.ON_DOOR_CATEGORY_ENABLE_DISABLE_LOAD, doorCategoryEnableDisableSaga),
    yield takeEvery(appconstant.config.ON_DOOR_HINGES_ACTIVE_DEACTIVE_LOAD, doorHingesActiveDeactiveSaga),
    yield takeEvery(appconstant.config.ON_HANDLE_EDIT_LOAD, handleEditSaga),
    yield takeEvery(appconstant.config.ON_FILM_LIST_LOAD, filmListSaga),
    yield takeEvery(appconstant.config.ON_FILM_ACTIVATE_DEACTIVATE_LOAD, filmActivateDeactivateSaga),
    yield takeEvery(appconstant.config.ON_FILM_DISABlE_ENABLE_LOAD, filmDisableEnableSaga),
    yield takeEvery(appconstant.config.ON_DELETE_FILM_LOAD, deleteFilmSaga),
    yield takeEvery(appconstant.config.ON_ADD_FILM_LOAD, addFilmSaga),
    yield takeEvery(appconstant.config.ON_FILM_UPDATE_LOAD, filmUpdateSaga),
    yield takeEvery(appconstant.OrderManagement.ON_ORDER_LIST_LOAD, OrderListSaga),
    yield takeEvery(appconstant.OrderManagement.ON_ORDER_DETAILS_LOAD, orderDetailsSaga),
    yield takeEvery(appconstant.tolerance.ON_GET_TOLERANCE_LOAD, getToleranceSaga),
    yield takeEvery(appconstant.tolerance.ON_SET_TOLERANCE_LOAD, setToleranceSaga),
  ]);
}
