import React, {useEffect} from "react";
import {
  Routes,
  Route,
  Navigate, useNavigate,
} from "react-router-dom";

// components
import MainLayout from "../layout/mainlayout";
import DefoultRoomSize from "../components/configurationOptionManagement/defoultRoomSize";
import EditDefoultRoomSize from "../components/configurationOptionManagement/editDefaultRoomSize";
import Partition from "../components/configurationOptionManagement/partition";
import EditPartition from "../components/configurationOptionManagement/editPartition";
import Panels from "../components/configurationOptionManagement/panels";
import PannelDetails from "../components/configurationOptionManagement/pannelDetails";
import FrameAndColor from "../components/configurationOptionManagement/frameAndColor";
import Handles from "../components/configurationOptionManagement/Handles";
import EditSingleMetalGlazed from "../components/configurationOptionManagement/editSingleMetalGlazed";
import Film from "../components/configurationOptionManagement/film";
import DoorGlass from "../components/configurationOptionManagement/doorGlass";
import EditDoorGlass from "../components/configurationOptionManagement/editDoorGlass";
import DoorChannel from "../components/configurationOptionManagement/doorChannel";
import EditSingleDoor from "../components/configurationOptionManagement/editSingleDoor";
import EditDoubleDoor from "../components/configurationOptionManagement/editDoubleDoor";
import DoorCategoryAndHinges from "../components/configurationOptionManagement/doorCategoryAndHinges";
import ProductManagement from "../components/productManagement";
import OrderManagement from "../components/orderManagement";
import EditProductDetails from "../components/productManagement/editProductDetails";
import ProductDetails from "../components/productManagement/viewuser";
import OrderDetails from "../components/orderManagement/orderDetails";
import ConfigurationManagement from "../components/configurationOptionManagement";
import EditHandelPrice from "../components/configurationOptionManagement/editHandlePrice";
import EditFilmDetails from "../components/configurationOptionManagement/editFilmDetails";
import ToleranceManagement from "../components/toleranceManagement";
import Door from "../components/configurationOptionManagement/door";
import GlassCovering from "../components/configurationOptionManagement/glassCovering";
import Login from "../components/login";

const RoutesNew = () => {
  const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  };

  useEffect(() => {
    const isAuthenticated = getCookie('isAuthenticated');

    if (!isAuthenticated && window.location.pathname !== '/login') {
      window.location.href = '/sign-in';
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={"productManagement"} />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/productManagement" element={<ProductManagement />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/orderManagement" element={<OrderManagement />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/editProductDetails" element={<EditProductDetails />} />
          <Route path="/defoultRoomSize" element={<DefoultRoomSize />} />
          <Route
            path="/editDefaultRoomSize"
            element={<EditDefoultRoomSize />}
          />
          <Route path="/partition" element={<Partition />} />
          <Route path="/editPartition" element={<EditPartition />} />
          <Route path="/panels" element={<Panels />} />
          <Route path="/pannelDetails" element={<PannelDetails />} />
          <Route path="/frameAndColor" element={<FrameAndColor />} />
          <Route path="/handles" element={<Handles />} />
          <Route path="/editHandlePrice" element={<EditHandelPrice />} />
          <Route
            path="/editSingleMetalGlazed"
            element={<EditSingleMetalGlazed />}
          />
          <Route path="/film" element={<Film />} />
          <Route path="/doorGlass" element={<DoorGlass />} />
          <Route path="/door" element={<Door />} />
          <Route path="/glassCovering" element={<GlassCovering />} />
          <Route path="/editDoorGlass" element={<EditDoorGlass />} />
          <Route path="/doorChannel" element={<DoorChannel />} />
          <Route path="/editSingleDoor" element={<EditSingleDoor />} />
          <Route path="/editDoubleDoor" element={<EditDoubleDoor />} />
          <Route path="/editFilmDetails" element={<EditFilmDetails />} />
          <Route
            path="/doorCategoryAndHinges"
            element={<DoorCategoryAndHinges />}
          />
          <Route path="/config" element={<ConfigurationManagement />} />
          <Route path="/toleranceManagement" element={<ToleranceManagement />} />
          <Route path="/*" element={<ProductManagement />} />
        </Route>
      </Routes>
    </div>
  );
};
export default RoutesNew;
