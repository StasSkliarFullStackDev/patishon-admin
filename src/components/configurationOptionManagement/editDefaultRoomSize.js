import React, { useState, useEffect } from "react";
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { Dispatched } from "../../utils/utils";
import {
  RoomSizeViewAction,
  RoomSizeEditAction,
} from "../../Redux/Actions/ConfigManagement";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { BreadcrumbFn } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const EditDefoultRoomSize = () => {
  const [fieldsData, setFieldsData] = useState({
    length: 100,
    breadth: 100,
  });
  const { RoomSizeData } = useSelector((state) => state.configReducer);

  useEffect(() => {
    document.title = "Patishon";
    window.scrollTo(0, 0);
    Dispatched(RoomSizeViewAction());
  }, []);

  useEffect(() => {
    setFieldsData({
      length: RoomSizeData?.length,
      breadth: RoomSizeData?.breadth,
      id: RoomSizeData?._id,
    });
  }, [RoomSizeData]);

  const onHandelChange = (e) => {
    let data = e.target.value;
    data = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    setFieldsData((state) => {
      return { ...state, [e.target?.name]: data };
    });
  };
  const onFormSubmit = (e) => {
    Dispatched(RoomSizeEditAction(fieldsData));
  };
  const validate = {
    room: Yup.object({
      length: Yup.string().required("Please enter linear length."),
      breadth: Yup.string().required("Please enter linear width."),
    }),
  };
  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config", "defoultRoomSize"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.defaultRoomSize,
          appconstant.editDefaultRoomSize,
        ]}
      />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">
              {appconstant.editDefaultRoomSize}
            </h6>
            <p style={{ marginTop: "10px" }}>
              <span style={{ color: "red", paddingLeft: "5px" }}>Note* : </span>
              <span>{appconstant.Range}</span>
            </p>
          </div>
          <div className="wrapper_line view_modules view">
            <Formik
              initialValues={fieldsData}
              enableReinitialize
              onSubmit={onFormSubmit}
              validationSchema={validate.room}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Textfiled
                      className='form-control'
                      label={appconstant.length}
                      name={"length"}
                      placeholder="Linear Length"
                      onChange={onHandelChange}
                      value={values.length}
                      errors={Boolean(touched.length && errors.length)}
                      helperText={touched.length && errors.length}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      className='form-control'
                      label={appconstant.breadth}
                      name={"breadth"}
                      placeholder="Linear Width"
                      onChange={onHandelChange}
                      value={values.breadth}
                      errors={Boolean(touched.breadth && errors.breadth)}
                      helperText={touched.breadth && errors.breadth}
                    />
                  </div>
                  <div>
                    <button type="submit" className="button-list">
                      {appconstant.buttonupate}
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditDefoultRoomSize;
