import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import appconstant from "../../themes/appconstant";
import { BreadcrumbFn, DisabledField } from "../../common/index";
import { Dispatched } from "../../utils/utils";
import { RoomSizeViewAction } from "../../Redux/Actions/ConfigManagement";
import { useSelector } from "react-redux";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DefoultRoomSize = () => {
  const { RoomSizeData } = useSelector((state) => state.configReducer);
  useEffect(() => {
    document.title = "Patishon";
    window.scrollTo(0, 0);
    Dispatched(RoomSizeViewAction());
  }, []);
  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.defaultRoomSize,
        ]}
      />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">
              {appconstant.defaultRoomSize}
            </h6>
          </div>
          <div className="wrapper_line view_modules view">
            <DisabledField label={"length"} value={RoomSizeData?.length} />
            <DisabledField label={"breadth"} value={RoomSizeData?.breadth} />
            <Link to="/editDefaultRoomSize">
              <button type="submit" className="button-list">
                {appconstant.buttonedit}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefoultRoomSize;
