import appconstant from "../../themes/appconstant";

const inistialData = {
    toleranceList: {
        headChannel: 1,
        floorChannelLeft: 1,
        floorChannelRight: 1,
        verticalFramingChannel: 1,
        horizontalFramingChannelLeft: 1,
        horizontalFramingChannelRight: 1,
        horizontalFramingChannelDoor: 1,
        horizontalBarsLeft: 1,
        horizontalBarsRight: 1,
        horizontalBarsDoor: 1,
        leftPanel: 1,
        rightPanel: 1,
        doorPanel: 1,
        cappingChannel: 1,
        endCoverTrims: 1,
    }
};

const ToleranceManagementReducer = (state = inistialData, action) => {
    switch (action.type) {
        case appconstant.tolerance.ON_GET_TOLERANCE_SUCCESS:
            return {
                ...state,
                toleranceList: action.payload,
            };
        default:
            return { ...state }
    }
}

export default ToleranceManagementReducer
