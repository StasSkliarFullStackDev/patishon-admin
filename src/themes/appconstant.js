import GlassCovering from "../components/configurationOptionManagement/glassCovering";

const appconstant = {
  // SERVER_URL: "http://192.168.3.176:3005/api/v1/admin/", //local server
  // ImageUrl: "http://192.168.3.176:3005/", //local server
  // SERVER_URL: "http://192.168.3.174:3002/api/v1/admin/", //local server
  // ImageUrl: "http://192.168.3.174:3002/", //local server

  SERVER_URL: process.env.REACT_APP_DEV_API_URL || "https://api.patishon.com/api/v1/admin/", //Dell server
  ImageUrl: "https://api.patishon.com/",
  changepassword: "Change Password",
  Oldpassword: "Old Password",
  NewPassword: "New Password",
  ConfirmNewPassword: "Confirm New Password",
  contactus: "Contact us",
  home: "Home",
  EmailAddress: "Email Address",
  eventManagement: "Event Management",
  UserManagement: "User Management",
  view: "View",
  edit: "Edit",
  block: "Block",
  update: "Update",
  export: "Export",
  add: "Add",
  Password: "Password",
  ConfrmPassword: "Confrm Password",
  email: "Email",
  contactNo: "Contact No",
  gender: "Gender",
  age: "Age",
  name: "Name",
  organizerDetails: "Organizer Details",
  eventOrganizermanagement: "Event Organizer management",
  delete: "Delete ",
  purposeManagement: "Purpose Management",
  eventDetails: "Event Details",
  organizer: "Organizer",
  eventDate: "Event Date",
  eventPlace: "Event Place",
  ticketsSold: "Tickets Sold",
  purposeDetails: "Purpose Details",
  monetaryAward: "Monetary Award",
  editEventDetail: "Edit Event Detail",
  teamMembers: "Team Members",
  teamMemberDetails: "Team Member Details",
  editUserDetails: "Edit User Details",
  editDetails: "Edit Details",
  editPurposeDetail: "Edit Purpose Detail",
  purposeOfTheEvent: "Purpose Of The Event",
  from: "From",
  userDetails: "user Details",
  teamMembersEditDetails: "Team Members Edit Details",
  productManagement: "Product Management",
  activate: "Activate",
  duplicate: "Duplicate",
  productName: "Product Name",
  price: "Price (£)",
  productDetails: "Product Details",
  editProductDetails: "Edit Product Details",
  orderManagement: "Order Management",
  orderDetails: "Order Details",
  customerName: "Customer Name",
  orderPice: "Order Price (£)",
  roomSize: "Room Size (mm*mm)",
  leftPannel: "Per Pannel Size Left (mm)",
  rightPannel: "Per Pannel Size Right (mm)",
  frame: "Frame Type",
  doorChannel: "Door Channel",
  door: "Door",
  glassCovering: "Glass Covering",
  doorGlass: "Door Glass",
  doorCategoryHinges: "Door Category/Hinges",
  handle: "Handle Type",
  length: "Linear Length (mm) ",
  breadth: "Linear Width (mm)",
  defaultRoomSize: " Room Size",
  buttonedit: "Edit",
  editDefaultRoomSize: "Edit  Room Size",
  partition: "Partition Size (mm)",
  permmPrice: "Per mm Price",
  editPartition: "Edit Partition",
  panels: "Panels ",
  headChannel: "Head Channel Tolerance (Length of partition - XXmm)",
  floorChannelLeft: "Left Floor Channel Tolerance (Calculated by configurator - XXmm)",
  floorChannelRight: "Right Floor Channel Tolerance (Calculated by configurator - XXmm)",
  verticalFramingChannel: "Vertical Framing Channel Tolerance (mm)",
  horizontalFramingChannelLeft: "Left Horizontal Framing Channel Tolerance (Left panel width - XXmm)",
  horizontalFramingChannelRight: "Right Horizontal Framing Channel Tolerance (Right panel width - XXmm)",
  horizontalFramingChannelDoor: "Horizontal Framing Channel Door Tolerance (Door panel width - XXmm)",
  horizontalBarsLeft: "Left Horizontal Bars Tolerance (Left panel width - XXmm)",
  horizontalBarsRight: "Right Horizontal Bars Tolerance (Left panel width - XXmm)",
  horizontalBarsDoor: "Horizontal Bars Door Tolerance (Door width - XXmm)",
  leftPanel: "Left Panel Tolerance (mm)",
  rightPanel: "Right Panel Tolerance (mm)",
  doorPanel: "Door Panel Tolerance (Width = Door width - XXmm)",
  cappingChannel: "Capping Channel Tolerance (mm)",
  endCoverTrims: "End Cover Trims Tolerance (mm)",
  addnewpanel: "Add New Panel",
  addNewPanel: "Add New Panel",
  panelSize: "Panel Size (mm)",
  panelPrice: "Panel Price (£)",
  perPanelPrice: "Per panel price (£)",
  perMmPrice: "Price per mm (£)",
  buttonAdd: "Add",
  pannelDetails: "Panel Details",
  editPanelDetails: "Edit Panel Details",
  frameType: "Frame Type",
  frameVariant: "Frame Variant",
  MarkAsDefault: "Mark As Default",
  frameAndColor: "Frame And Color",
  handleSides: "handle Sides",
  handles: "Handles",
  handleVariants: "Handle Variants",
  editSingleMetalGlazed: "Edit Single Metal Glazed",
  framePrice: "Frame Price Per mm (£)",
  filmPrice: "Film Price (£)",
  filmPriceIncludedToBasePric: "Film Price Included To Base Pric",
  film: "Film ",
  editFilmDetails: "Edit Film Details",
  editDoorGlass: "Edit Door Glass ",
  glassSize: "Glass Size (mm)",
  channelSize: "Channel Size (mm)",
  doorType: "Door Type",
  disable: "Disable",
  enable: "Enable",
  editSingleDoor: "Edit Single Door",
  size: "Size (mm) ",
  editDoubleDoor: "Edit Double Door",
  doorCategoryAndHinges: "Door Category And Hinges",
  doorCategory: "Door Category",
  ConfigurationManagement: "Configuration Management",
  toleranceManagement: "Tolerance Management",
  orderID: "Order ID",
  orderDateTime: "Order Date/Time",
  dateAndTimeFormat: "DD/MM/YYYY h:mm A",
  handleVariant: "Handle Variant",
  download: "Download",
  productImage: "Product Image",
  filmName: "Film Name",
  filmImage: "Film Image",
  addnewfilm: "Add New Film",
  editframetype: "Edit Frame Type",
  deactivate: "Deactivate ",
  doorGlassm: "Door Glass(mm)",
  buttonupate: "Update",
  addColor: "Add color",
  addVariantType: "Add Variant Type",
  editHandlePrice: "Handle Variant Details",
  variantImage: "Variant Image",
  ActivateTittle: "Activate",
  DeactivateTittle: "Deactivate",
  DuplicateTittle: "Duplicate",
  ActivateProduct: `Are you sure, you want to activate this product?`,
  DeactivateProduct: `Are you sure, you want to deactivate this product?`,
  DuplicateProduct: `Are you sure, you want to duplicate this product?`,
  toastTimer: 1500,
  ERROR_MSG: "Something went wronge.",
  Range: "The linear length and linear width range must be 1000 mm to 9000 mm.",
  fileSize: 'Image size should be up to 10 MB.',
  fileExtention: 'Please upload .png, .jpg and .jpeg image format only.',
  imageSize: 10485760,
  changeImage: "Change image.",
  addImage: "Add Image",

  extentions: {
    jpeg: 'image/jpeg',
    jpg: 'image/jpg',
    png: 'image/png'
  },

  //*********** Redux constant **********/
  // Fail Api
  ON_API_FAIL: "ON_API_FAIL",
  //propdeuct managment
  ProductManagement: {
    ON_LIST_LOAD: "ON_LIST_LOAD",
    ON_LIST_SUCCESS: "ON_LIST_SUCCESS",
    ON_LIST_FAIL: "ON_LIST_FAIL",
    ON_ACTIVATE_LOAD: "ON_ACTIVATE_LOAD",
    ON_ACTIVATE_SUCCESS: "ON_ACTIVATE_SUCCESS",
    ON_ACTIVATE_FAIL: "ON_ACTIVATE_FAIL",
    ON_DUPLICATE_LOAD: "ON_DUPLICATE_LOAD",
    ON_DUPLICATE_SUCCESS: "ON_DUPLICATE_SUCCESS",
    ON_DUPLICATE_FAIL: "ON_DUPLICATE_FAIL",
    ON_PRODUCT_EDIT_LOAD: "ON_PRODUCT_EDIT_LOAD",
    ON_PRODUCT_EDIT_SUCCESS: "ON_PRODUCT_EDIT_SUCCESS",
    ON_PRODUCT_EDIT_FAIL: "ON_PRODUCT_EDIT_FAIL",
    PAGE_OFFSET_RESET: "PAGE_OFFSET_RESET",
  },

  // ConfigurationManagement
  config: {
    ON_VIEW_ROOM_SIZE_LOAD: "ON_VIEW_ROOM_SIZE_LOAD",
    ON_VIEW_ROOM_SIZE_SUCCESS: "ON_VIEW_ROOM_SIZE_SUCCESS",
    ON_VIEW_ROOM_SIZE_FAIL: "ON_VIEW_ROOM_SIZE_FAIL",

    //Edit Room Size
    ON_EDIT_ROOM_SIZE_LOAD: "ON_EDIT_ROOM_SIZE_LOAD",
    ON_EDIT_ROOM_SIZE_SUCCESS: "ON_EDIT_ROOM_SIZE_SUCCESS",
    ON_EDIT_ROOM_SIZE_FAIL: "ON_EDIT_ROOM_SIZE_FAIL",

    //View Panel
    ON_VIEW_PANEL_LOAD: "ON_VIEW_PANEL_LOAD",
    ON_VIEW_PANEL_SUCCESS: "ON_VIEW_PANEL_SUCCESS",

    //Edit Panel
    ON_UPDATE_PANEL_LOAD: "ON_UPDATE_PANEL_LOAD",
    ON_UPDATE_PANEL_SUCCESS: "ON_UPDATE_PANEL_SUCCESS",

    //Frame & Color
    ON_FRAME_TYPE_LIST_LOAD: "ON_FRAME_TYPE_LIST_LOAD",
    ON_FRAME_TYPE_LIST_SUCCESS: "ON_FRAME_TYPE_LIST_SUCCESS",
    ON_FRAME_VARIANT_LIST_LOAD: "ON_FRAME_VARIANT_LIST_LOAD",
    ON_FRAME_VARIANT_LIST_SUCCESS: "ON_FRAME_VARIANT_LIST_SUCCESS",
    ON_FRAME_TYPE_ACTIVE_DEACTIVE_LOAD: "ON_FRAME_TYPE_ACTIVE_DEACTIVE_LOAD",
    ON_FRAME_VARIANT_ACTIVE_DEACTIVE_LOAD: "ON_FRAME_VARIANT_ACTIVE_DEACTIVE_LOAD",
    ON_FRAME_VARIANT_DEFAULT_LOAD: "ON_FRAME_VARIANT_DEFAULT_LOAD",
    ON_FRAME_TYPE_UPDATE_LOAD: "ON_FRAME_TYPE_UPDATE_LOAD",
    ON_FRAME_DELETE_VARIANT_COLOR: "ON_FRAME_DELETE_VARIANT_COLOR",
    ON_FRAME_ADD_LOAD: "ON_FRAME_ADD_LOAD",

    //Door glass
    ON_DOOR_GLASS_LIST_LOAD: "ON_DOOR_GLASS_LIST_LOAD",
    ON_DOOR_GLASS_LIST_SUCCESS: "ON_DOOR_GLASS_LIST_SUCCESS",
    ON_DOOR_SIZE_LIST_LOAD: "ON_DOOR_SIZE_LIST_LOAD",
    ON_DOOR_SIZE_LIST_SUCCESS: "ON_DOOR_SIZE_LIST_SUCCESS",
    ON_DOOR_GLASS_EDIT_LOAD: "ON_DOOR_GLASS_EDIT_LOAD",
    ON_DOOR_GLASS_ACTIVE_DEACTIVE_LOAD: "ON_DOOR_GLASS_ACTIVE_DEACTIVE_LOAD",

    //Door channel
    ON_DOOR_CHANNEL_LIST_LOAD: "ON_DOOR_CHANNEL_LIST_LOAD",
    ON_DOOR_CHANNEL_LIST_SUCCESS: "ON_DOOR_CHANNEL_LIST_SUCCESS",
    ON_DOOR_TYPE_ENABLE_DISABLE_LOAD: "ON_DOOR_TYPE_ENABLE_DISABLE_LOAD",
    ON_DOOR_SIZE_ENABLE_DISABLE_LOAD: "ON_DOOR_SIZE_ENABLE_DISABLE_LOAD",
    ON_DOOR_CHANNEL_EDIT_LOAD: "ON_DOOR_CHANNEL_EDIT_LOAD",

    //Handle
    ON_HANDLE_VARIANT_LIST_LOAD: "ON_HANDLE_VARIANT_LIST_LOAD",
    ON_HANDLE_VARIANT_UPDATE_LOAD: "ON_HANDLE_VARIANT_UPDATE_LOAD",
    ON_HANDLE_VARIANT_LIST_SUCCESS: "ON_HANDLE_VARIANT_LIST_SUCCESS",
    ON_HANDLE_VARIANT_ACTIVE_DEACTIVE_LOAD: "ON_HANDLE_VARIANT_ACTIVE_DEACTIVE_LOAD",
    ON_HANDLE_VARIANT_DEFAULT_LOAD: "ON_HANDLE_VARIANT_DEFAULT_LOAD",
    ON_HANDLE_EDIT_LOAD: "ON_HANDLE_EDIT_LOAD",

    //Door category and hinges
    ON_DOOR_CATEGORY_AND_HINGES_LIST_LOAD: "ON_DOOR_CATEGORY_AND_HINGES_LIST_LOAD",
    ON_DOOR_CATEGORY_AND_HINGES_LIST_SUCCESS: "ON_DOOR_CATEGORY_AND_HINGES_LIST_SUCCESS",
    ON_DOOR_CATEGORY_ENABLE_DISABLE_LOAD: "ON_DOOR_CATEGORY_ENABLE_DISABLE_LOAD",
    ON_DOOR_HINGES_ACTIVE_DEACTIVE_LOAD: "ON_DOOR_HINGES_ACTIVE_DEACTIVE_LOAD",

    //Film
    ON_FILM_LIST_LOAD: "ON_FILM_LIST_LOAD",
    ON_FILM_LIST_SUCCESS: "ON_FILM_LIST_SUCCESS",
    ON_FILM_ACTIVATE_DEACTIVATE_LOAD: "ON_FILM_ACTIVATE_DEACTIVATE_LOAD",
    ON_FILM_DISABlE_ENABLE_LOAD: "ON_FILM_DISABlE_ENABLE_LOAD",
    ON_DELETE_FILM_LOAD: "ON_DELETE_FILM_LOAD",
    ON_ADD_FILM_LOAD: "ON_ADD_FILM_LOAD",
    ON_FILM_UPDATE_LOAD: "ON_FILM_UPDATE_LOAD",
  },
  //OrderManagement
  OrderManagement: {
    ON_ORDER_LIST_LOAD: "ON_ORDER_LIST_LOAD",
    ON_ORDER_LIST_SUCCESS: "ON_ORDER_LIST_SUCCESS",
    ON_ORDER_DETAILS_LOAD: 'ON_ORDER_DETAILS_LOAD',
    ON_ORDER_DETAILS_SUCCESS: "ON_ORDER_DETAILS_SUCCESS"
  },
  //ToleranceManagement
  tolerance: {
    ON_GET_TOLERANCE_LOAD: "ON_GET_TOLERANCE_LOAD",
    ON_GET_TOLERANCE_SUCCESS: "ON_GET_TOLERANCE_SUCCESS",
    ON_SET_TOLERANCE_LOAD: "ON_SET_TOLERANCE_LOAD",
    ON_SET_TOLERANCE_SUCCESS: "ON_SET_TOLERANCE_SUCCESS",
  }
};
export default appconstant;
