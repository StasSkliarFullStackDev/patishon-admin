import { APIMethod } from "./ApiMethods";

export const ProductManagementListApi = (data) => {
  return APIMethod.POST("product/list", JSON.stringify(data));
};

export const ProductActivateApi = (data) => {
  return APIMethod.PUT(`product/status/${data}`);
};
export const ProductDuplicateApi = (data) => {
  return APIMethod.GET(`product/duplicate/${data}`);
};
export const ProductEditApi = (data) => {
  return APIMethod.POST(`product/update`, data);
};

//****configration Management */

// ROOM DATA VIEW
export const roomSizeViewApi = (data) => {
  return APIMethod.GET(`roomSizeDetail`);
};

//ROOM DATA EDIT
export const roomSizeEditApi = (data) => {
  return APIMethod.POST(`roomSizeUpdate`, JSON.stringify(data));
};

//PANELS VIEW & EDIT
export const panelViewApi = (data) => {
  return APIMethod.GET(`panelView`, JSON.stringify(data));
};

export const panelUpdateApi = (data) => {
  return APIMethod.PUT(`panelUpdate`, JSON.stringify(data));
};

//FRAME & COLORS
export const frameTypeListApi = (data) => {
  return APIMethod.POST(`frameTypeList`, JSON.stringify(data));
};

export const frameVariantListApi = (data) => {
  return APIMethod.POST(`frameVariantList`, JSON.stringify(data));
};

export const frameTypeActiveDeactiveApi = (data) => {
  return APIMethod.PUT(`frameTypeActiveDeactive/` + data);
};

export const frameVariantActiveDeactiveApi = (data) => {
  return APIMethod.PUT(`frameVariantActiveDeactive/` + data);
};

export const frameVariantDefaultApi = (data) => {
  return APIMethod.PUT(`frameVariantDefault/` + data);
};

export const frameTypeUpdateApi = (data) => {
  return APIMethod.PUT(`frameTypeUpdate`, JSON.stringify(data));
};

export const frameAddApi = (data) => {
  return APIMethod.POST(`frameAdd`, JSON.stringify(data));
};

export const deleteFrameVariantApi = (data) => {
  return APIMethod.DELETE(`frameVariantDelete/` + data);
};

//DOOR CHANNEL
export const doorChannelListApi = (data) => {
  return APIMethod.POST(`doorChannelList`, JSON.stringify(data));
};

export const doorTypeEnableDisableApi = (data) => {
  return APIMethod.PUT(`doorTypeEnableDisable/` + data);
};

export const doorSizeEnableDisableApi = (data) => {
  return APIMethod.PUT(`doorSizeEnableDisable/` + data);
};

export const doorChannelEditApi = (data) => {
  return APIMethod.PUT(`doorChannelEdit`, JSON.stringify(data));
};

//DOOR GLASS
export const doorGlassListApi = (data) => {
  return APIMethod.POST(`doorGlassList`, JSON.stringify(data));
};

export const doorSizeListApi = () => {
  return APIMethod.GET(`doorSizeList`);
};

export const doorGlassEditApi = (data) => {
  return APIMethod.PUT(`doorGlassEdit`, JSON.stringify(data));
};

export const doorGlassActiveDeactiveApi = (data) => {
  return APIMethod.PUT(`doorGlassActiveDeactive/` + data);
};

//HANDLES
export const handleVariantListApi = (data) => {
  return APIMethod.POST(`handleVariantList`, JSON.stringify(data));
};

export const handleVariantUpdateApi = (data) => {
  return APIMethod.PUT(`handleVariantUpdate`, data);
};

export const handleVariantActiveDeactiveApi = (data) => {
  return APIMethod.PUT(`handleVariantActiveDeactive/` + data);
};

export const handleVariantDefaultApi = (data) => {
  return APIMethod.PUT(`handleVariantDefault/` + data);
};

//DOOR CATEGORY AND HINGES
export const doorCategoryAndHingesListApi = (data) => {
  return APIMethod.POST(`doorCategoryAndHingesList`, JSON.stringify(data));
};

export const doorCategoryEnableDisableApi = (data) => {
  return APIMethod.PUT(`doorCategoryEnableDisable/` + data);
};

export const doorHingesActiveDeactiveApi = (data) => {
  return APIMethod.PUT(`doorHingesActiveDeactive/` + data);
};

//FILM
export const filmListApi = (data) => {
  return APIMethod.POST(`filmList`, JSON.stringify(data));
};

export const filmActivateDeactivateApi = (data) => {
  return APIMethod.PUT(`filmActivateDeactivate` + data);
};

export const filmDisableEnableApi = () => {
  return APIMethod.GET(`activateDeactivateFilms`);
};

export const deleteFilmApi = (data) => {
  return APIMethod.DELETE(`deleteFilm/` + data);
};

export const addFilmApi = (data) => {
  return APIMethod.POST(`addFilm`, data);
};

export const filmUpdateApi = (data) => {
  return APIMethod.POST(`filmUpdate`, data);
};

//ORDER MANAGMENT
export const orderListApi = (data) => {
  return APIMethod.POST(`orderList`, data);
};

export const orderDetailsApi = (data) => {
  return APIMethod.GET(`orderDetails/` + data);
};

//TOLERANCE MANAGMENT
export const getToleranceApi = (data) => {
  return APIMethod.GET(`getTolerance`);
}

export const setToleranceApi = (data) => {
  return APIMethod.POST(`setTolerance`, data);
}
