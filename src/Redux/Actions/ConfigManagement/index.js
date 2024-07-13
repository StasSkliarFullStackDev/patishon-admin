import appconstant from "../../../themes/appconstant";

export const RoomSizeViewAction = (data) => {
  return {
    type: appconstant.config.ON_VIEW_ROOM_SIZE_LOAD,
    payload: data,
  };
};
export const RoomSizeEditAction = (data) => {
  return {
    type: appconstant.config.ON_EDIT_ROOM_SIZE_LOAD,
    payload: data,
  };
};

export const panelViewAction = (data) => {
  return {
    type: appconstant.config.ON_VIEW_PANEL_LOAD,
    payload: data,
  };
};

export const panelUpdateAction = (data) => {
  return {
    type: appconstant.config.ON_UPDATE_PANEL_LOAD,
    payload: data,
  };
};

// PANELS & COLORS
export const frameTypeListAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_TYPE_LIST_LOAD,
    payload: data,
  };
}

export const frameVariantListAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_VARIANT_LIST_LOAD,
    payload: data,
  };
}

export const frameTypeActiveDeactiveAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_TYPE_ACTIVE_DEACTIVE_LOAD,
    payload: data,
  };
}

export const frameVariantActiveDeactiveAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_VARIANT_ACTIVE_DEACTIVE_LOAD,
    payload: data,
  };
}

export const frameVariantDefaultAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_VARIANT_DEFAULT_LOAD,
    payload: data,
  };
}

export const frameTypeUpdateAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_TYPE_UPDATE_LOAD,
    payload: data,
  };
}

export const frameAddAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_ADD_LOAD,
    payload: data,
  };
}

export const deleteFrameVariantAction = (data) => {
  return {
    type: appconstant.config.ON_FRAME_DELETE_VARIANT_COLOR,
    payload: data,
  };
}

//DOOR CHANNEL
export const doorChannelListAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_CHANNEL_LIST_LOAD,
    payload: data,
  };
}

export const doorTypeEnableDisableAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_TYPE_ENABLE_DISABLE_LOAD,
    payload: data,
  };
}

export const doorSizeEnableDisableAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_SIZE_ENABLE_DISABLE_LOAD,
    payload: data,
  };
}

export const doorChannelEditAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_CHANNEL_EDIT_LOAD,
    payload: data,
  };
}

//DOOR GLASS
export const doorGlassListAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_GLASS_LIST_LOAD,
    payload: data,
  };
}

export const doorSizeListAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_SIZE_LIST_LOAD,
    payload: data,
  };
}

export const doorGlassEditAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_GLASS_EDIT_LOAD,
    payload: data,
  };
}

export const doorGlassActiveDeactiveAciton = (data) => {
  return {
    type: appconstant.config.ON_DOOR_GLASS_ACTIVE_DEACTIVE_LOAD,
    payload: data,
  };
}

//HANDLES
export const handleVariantListAction = (data) => {
  return {
    type: appconstant.config.ON_HANDLE_VARIANT_LIST_LOAD,
    payload: data,
  };
}

export const handleVariantUpdateAction = (data) => {
  return {
    type: appconstant.config.ON_HANDLE_VARIANT_UPDATE_LOAD,
    payload: data,
  };
}

export const handleVariantActiveDeactiveAction = (data) => {
  return {
    type: appconstant.config.ON_HANDLE_VARIANT_ACTIVE_DEACTIVE_LOAD,
    payload: data,
  };
}

export const handleVariantDefaultAction = (data) => {
  return {
    type: appconstant.config.ON_HANDLE_VARIANT_DEFAULT_LOAD,
    payload: data,
  };
}

export const handleEditAction = (data) => {
  return {
    type: appconstant.config.ON_HANDLE_EDIT_LOAD,
    payload: data,
  };
}


//DOOR CATEGORY AND HINGES
export const doorCategoryAndHingesListAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_CATEGORY_AND_HINGES_LIST_LOAD,
    payload: data,
  };
}

export const doorCategoryEnableDisableAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_CATEGORY_ENABLE_DISABLE_LOAD,
    payload: data,
  };
}

export const doorHingesActiveDeactiveAction = (data) => {
  return {
    type: appconstant.config.ON_DOOR_HINGES_ACTIVE_DEACTIVE_LOAD,
    payload: data,
  };
}

//FILM
export const filmListAction = (data) => {
  return {
    type: appconstant.config.ON_FILM_LIST_LOAD,
    payload: data,
  };
}

export const filmActivateDeactivateAction = (data) => {
  return {
    type: appconstant.config.ON_FILM_ACTIVATE_DEACTIVATE_LOAD,
    payload: data,
  };
}

export const filmDisableEnableAction = (data) => {
  return {
    type: appconstant.config.ON_FILM_DISABlE_ENABLE_LOAD,
    payload: data,
  };
}

export const deleteFilmAction = (data) => {
  return {
    type: appconstant.config.ON_DELETE_FILM_LOAD,
    payload: data,
  };
}

export const addFilmAction = (data) => {
  return {
    type: appconstant.config.ON_ADD_FILM_LOAD,
    payload: data,
  };
}

export const filmUpdateAction = (data) => {
  return {
    type: appconstant.config.ON_FILM_UPDATE_LOAD,
    payload: data,
  };
}
