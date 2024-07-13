import { put, call } from "@redux-saga/core/effects";
import appconstant from "../../themes/appconstant";
import { addFilmApi, deleteFilmApi, deleteFrameVariantApi, doorCategoryAndHingesListApi, doorCategoryEnableDisableApi, doorChannelEditApi, doorChannelListApi, doorGlassActiveDeactiveApi, doorGlassEditApi, doorGlassListApi, doorHingesActiveDeactiveApi, doorSizeEnableDisableApi, doorSizeListApi, doorTypeEnableDisableApi, filmActivateDeactivateApi, filmDisableEnableApi, filmListApi, filmUpdateApi, frameAddApi, frameTypeActiveDeactiveApi, frameTypeListApi, frameTypeUpdateApi, frameVariantActiveDeactiveApi, frameVariantDefaultApi, frameVariantListApi, handleEditApi, handleVariantActiveDeactiveApi, handleVariantDefaultApi, handleVariantListApi, handleVariantUpdateApi, panelUpdateApi, panelViewApi, roomSizeEditApi, roomSizeViewApi } from "../Api";
import { navigatorFn, onError, onFail } from "../../utils/utils";
import { toaster } from "../../utils/Toaster";

export function* RoomSizeSaga() {
  try {
    let Data = yield call(roomSizeViewApi);
    if (Data.status === 0) {
      yield put({
        type: appconstant.config.ON_VIEW_ROOM_SIZE_SUCCESS,
        payload: Data.result.data,
      });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    onError(e);
  }
}

export function* RoomSizeEditSaga(action) {
  try {
    let Data = yield call(roomSizeEditApi, action.payload);
    if (Data.status === 0) {
      yield put({
        type: appconstant.config.ON_EDIT_ROOM_SIZE_SUCCESS,
        payload: Data.result.data,
      });
      toaster(Data.result.message);
      navigatorFn("/config");
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* panelViewSaga(action) {
  try {
    let Data = yield call(panelViewApi, action.payload);
    if (Data.status === 0) {
      yield put({
        type: appconstant.config.ON_VIEW_PANEL_SUCCESS,
        payload: Data.result.data,
      });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* panelUpdateSaga(action) {
  try {
    let Data = yield call(panelUpdateApi, action.payload);
    if (Data.status === 0) {
      yield put({
        type: appconstant.config.ON_VIEW_PANEL_SUCCESS,
        payload: Data.result.data,
      });
      toaster(Data.result.message);
      navigatorFn("/config");
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

//Frames and Colors............

export function* frameTypeListSaga(action) {
  try {
    let Data = yield call(frameTypeListApi, action.payload);
    if (Data.status === 0) {
      yield put({
        type: appconstant.config.ON_FRAME_TYPE_LIST_SUCCESS,
        payload: Data.result,
      });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* frameVariantListSaga(action) {
  try {
    let Data = yield call(frameVariantListApi, action.payload);
    if (Data.status === 0) {
      yield put({
        type: appconstant.config.ON_FRAME_VARIANT_LIST_SUCCESS,
        payload: Data.result,
      });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* frameTypeActiveDeactiveSaga(action) {
  try {
    let Data = yield call(frameTypeActiveDeactiveApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(frameTypeListSaga, { payload: action.payload[1] });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* frameVariantActiveDeactiveSaga(action) {
  try {
    let Data = yield call(frameVariantActiveDeactiveApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(frameVariantListSaga, { payload: action.payload[1] });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* frameVariantDefaultSaga(action) {
  try {
    let Data = yield call(frameVariantDefaultApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(frameVariantListSaga, { payload: action.payload[1] });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* frameTypeUpdateSaga(action) {
  try {
    let Data = yield call(frameTypeUpdateApi, action.payload);
    if (Data.status === 0) {
      toaster(Data.result.message);
      navigatorFn("/frameAndColor");
      localStorage.removeItem("editFrame")
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* frameAddSaga(action) {
  try {
    let Data = yield call(frameAddApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(frameVariantListSaga, { payload: action.payload[1] });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* deleteFrameVariantSaga(action) {
  try {
    let Data = yield call(deleteFrameVariantApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(frameVariantListSaga, { payload: action.payload[1] });
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

//DOOR CHANNEl........................
export function* doorChannelListSaga(action) {
  try {
    let Data = yield call(doorChannelListApi, action.payload);
    if (Data.status === 0) {
      yield put({ type: appconstant.config.ON_DOOR_CHANNEL_LIST_SUCCESS, payload: Data.result })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorTypeEnableDisableSaga(action) {
  try {
    let Data = yield call(doorTypeEnableDisableApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(doorChannelListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorSizeEnableDisableSaga(action) {
  try {
    let Data = yield call(doorSizeEnableDisableApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(doorChannelListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorChannelEditSaga(action) {
  try {
    let Data = yield call(doorChannelEditApi, action.payload);
    if (Data.status === 0) {
      toaster(Data.result.message);
      navigatorFn("/doorChannel")
      localStorage.removeItem("doubleDoorChannel")
      localStorage.removeItem("singleDoorChannel")
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorSizeListSaga() {
  try {
    let Data = yield call(doorSizeListApi);
    if (Data.status === 0) {
      yield put({ type: appconstant.config.ON_DOOR_SIZE_LIST_SUCCESS, payload: Data.result })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

//DOOR GLASS...........................

export function* doorGlassListSaga(action) {
  try {
    let Data = yield call(doorGlassListApi, action.payload);
    if (Data.status === 0) {
      yield put({ type: appconstant.config.ON_DOOR_GLASS_LIST_SUCCESS, payload: Data.result })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorGlassEditSaga(action) {
  try {
    let Data = yield call(doorGlassEditApi, action.payload);
    if (Data.status === 0) {
      toaster(Data.result.message);
      navigatorFn("/doorGlass")
      localStorage.removeItem("editDoorGlass")
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorGlassActiveDeactiveSaga(action) {
  try {
    let Data = yield call(doorGlassActiveDeactiveApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(doorGlassListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

//HANDLES.................
export function* handleVariantListSaga(action) {
  try {
    let Data = yield call(handleVariantListApi, action.payload);
    if (Data.status === 0) {
      yield put({ type: appconstant.config.ON_HANDLE_VARIANT_LIST_SUCCESS, payload: Data.result })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* handleVariantActiveDeactiveSaga(action) {
  try {
    let Data = yield call(handleVariantActiveDeactiveApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(handleVariantListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* handleVariantDefaultSaga(action) {
  try {
    let Data = yield call(handleVariantDefaultApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(handleVariantListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* handleEditSaga(action) {
  try {
    let Data = yield call(handleVariantUpdateApi, action.payload);
    if (Data.status === 0) {
      toaster(Data.result.message);
      navigatorFn("/handles")
      localStorage.removeItem("editHandlePrice")
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

//DOOR CATEGORY AND HINGES................

export function* doorCategoryAndHingesListSaga(action) {
  try {
    let Data = yield call(doorCategoryAndHingesListApi, action.payload);
    if (Data.status === 0) {
      yield put({ type: appconstant.config.ON_DOOR_CATEGORY_AND_HINGES_LIST_SUCCESS, payload: Data.result })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorCategoryEnableDisableSaga(action) {
  try {
    let Data = yield call(doorCategoryEnableDisableApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(doorCategoryAndHingesListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* doorHingesActiveDeactiveSaga(action) {
  try {
    let Data = yield call(doorHingesActiveDeactiveApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(doorCategoryAndHingesListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* filmListSaga(action) {
  try {
    let Data = yield call(filmListApi, action.payload);
    if (Data.status === 0) {
      yield put({ type: appconstant.config.ON_FILM_LIST_SUCCESS, payload: Data.result })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* filmActivateDeactivateSaga(action) {
  try {
    let Data = yield call(filmActivateDeactivateApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(filmListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* filmDisableEnableSaga(action) {
  try {
    let Data = yield call(filmDisableEnableApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(filmListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* deleteFilmSaga(action) {
  try {
    let Data = yield call(deleteFilmApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(filmListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* addFilmSaga(action) {
  try {
    let Data = yield call(addFilmApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      yield call(filmListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

export function* filmUpdateSaga(action) {
  try {
    let Data = yield call(filmUpdateApi, action.payload[0]);
    if (Data.status === 0) {
      toaster(Data.result.message);
      navigatorFn("/film")
      localStorage.removeItem("editFilm")
      // yield call(filmListSaga, { payload: action.payload[1] })
    } else {
      yield call(onFail, Data.result.message);
    }
  } catch (e) {
    yield call(onError());
  }
}

