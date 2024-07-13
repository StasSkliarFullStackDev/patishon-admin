import appconstant from "../../themes/appconstant";

const inistialData = {
  isLoading: false,
  RoomSizeData: {},
  frameType: [],
  panelDetails: {},
  frameVariant: [],
  doorGlassList: [],
  doorSizes: {},
  doorChannelList: {},
  handleVariantList: [],
  doorCategoryAndHingesList: [],
  filmList: []
};

const configReducer = (state = inistialData, action) => {
  switch (action.type) {
    case appconstant.config.ON_VIEW_ROOM_SIZE_LOAD:
      return {
        isLoading: true,
      };
    case appconstant.config.ON_VIEW_ROOM_SIZE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        RoomSizeData: action.payload,
      };
    case appconstant.config.ON_VIEW_ROOM_SIZE_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    //PANEL VIEW.............     
    case appconstant.config.ON_VIEW_PANEL_SUCCESS:
      return {
        ...state,
        panelDetails: { ...action.payload }
      };

    //PANEL UPDATE.............   
    case appconstant.config.ON_UPDATE_PANEL_SUCCESS:
      return {
        ...state,
        isLoading: true,
      };
    //FRAME LIST.............

    case appconstant.config.ON_FRAME_TYPE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        frameType: action.payload
      };

    case appconstant.config.ON_FRAME_VARIANT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        frameVariant: action.payload
      };

    //DOOR CHANNELS.........
    case appconstant.config.ON_DOOR_CHANNEL_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        doorChannelList: action.payload
      };

    //GLASS DOOR..............

    case appconstant.config.ON_DOOR_GLASS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        doorGlassList: action.payload
      };

    case appconstant.config.ON_DOOR_SIZE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        doorSizes: action.payload
      };
    //HANDLES............

    case appconstant.config.ON_HANDLE_VARIANT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        handleVariantList: action.payload
      };
    //DOOR CATEGORY AND HINGES.......

    case appconstant.config.ON_DOOR_CATEGORY_AND_HINGES_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        doorCategoryAndHingesList: action.payload
      };
    //FILM.........
    case appconstant.config.ON_FILM_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        filmList: action.payload
      };
      
    default:
      return { ...state };
  }
};

export default configReducer;
