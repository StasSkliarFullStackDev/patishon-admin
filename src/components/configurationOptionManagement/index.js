import React from "react";
import { Breadcrumb } from "antd";
import images from "../../themes/appImage";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import appconstant from "../../themes/appconstant";
import { LinkFn } from "../../common/index";
const ConfigurationManagement = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/productManagement">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/config" className="breadCrumbLink">
            {appconstant.ConfigurationManagement}
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background hand-sap"
        style={{ minHeight: 360 }}
      >
        <div className="">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
            <h6 className="text-white text-capitalize ps-3">
              {appconstant.ConfigurationManagement}
            </h6>
          </div>
          <div className="d-flex target">
            <LinkFn
              destination={"/defoultRoomSize"}
              img={images.room}
              text={"Room Size"}
            />
            <LinkFn
              destination={"/panels"}
              img={images.frames}
              text={"Panels"}
            />
            <LinkFn
              destination={"/frameAndColor"}
              img={images.frames}
              text={"Frames and Color"}
            />
            <LinkFn
              destination={"/glassCovering"}
              img={images.doorglass}
              text={"Glass Covering"}
            />
            <LinkFn
              destination={"/handles"}
              img={images.handle}
              text={"Handles"}
            />
            <LinkFn destination={"/film"} img={images.films2} text={"Film"} />

            <LinkFn
                destination={"/door"}
                img={images.door}
                text={"Door"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfigurationManagement;