import React, { useState } from "react";
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { Dispatched, } from "../../utils/utils";
import { functionValidation } from "../../utils/functionValidation"
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { BreadcrumbFn } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { getToleranceAction, setToleranceAction } from "../../Redux/Actions/toleranceManagment";

const ToleranceManagement = () => {
  const toleranceData = useSelector((state) => state.ToleranceManagementReducer.toleranceList);
  const [fieldsData, setFieldsData] = useState(toleranceData);
  const [inputFieldDisable, setInputFieldDisable] = useState(true)

  const onHandelChange = (e) => {
    let data = e.target.value;
    if (+data > 100) {
      return
    }
    data = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    setFieldsData((state) => {
      return { ...state, [e.target?.name]: +data };
    });
  };
  const onFormSubmit = (e) => {
    if (inputFieldDisable) {
      setInputFieldDisable(!inputFieldDisable)
    } else {
      Dispatched(setToleranceAction(e))
      setInputFieldDisable(!inputFieldDisable)
    }
  };
  const validate = {
    room: Yup.object({
      headChannel: Yup.number().required(functionValidation.plzEnter("head channel tolerance ")).min(1, functionValidation.minmumNum("head channel tolerance", 1)),
      floorChannelLeft: Yup.number().required(functionValidation.plzEnter("left floor channel tolerance")).min(1, functionValidation.minmumNum("left floor channel tolerance", 1)),
      floorChannelRight: Yup.number().required(functionValidation.plzEnter("right floor channel tolerance")).min(1, functionValidation.minmumNum("right floor channel tolerance", 1)),
      verticalFramingChannel: Yup.number().required(functionValidation.plzEnter("vertical framing channel tolerance")).min(1, functionValidation.minmumNum("vertical framing channel tolerance", 1)),
      horizontalFramingChannelLeft: Yup.number().required(functionValidation.plzEnter("left horizontal framing channel tolerance")).min(1, functionValidation.minmumNum("left horizontal framing channel tolerance", 1)),
      horizontalFramingChannelRight: Yup.number().required(functionValidation.plzEnter("right horizontal framing channel tolerance")).min(1, functionValidation.minmumNum("right horizontal framing channel tolerance", 1)),
      horizontalFramingChannelDoor: Yup.number().required(functionValidation.plzEnter("horizontal framing channel door tolerance")).min(1, functionValidation.minmumNum("horizontal framing channel door tolerance", 1)),
      horizontalBarsLeft: Yup.number().required(functionValidation.plzEnter("left horizontal bars tolerance")).min(1, functionValidation.minmumNum("left horizontal bars tolerance", 1)),
      horizontalBarsRight: Yup.number().required(functionValidation.plzEnter("right horizontal bars tolerance")).min(1, functionValidation.minmumNum("right horizontal bars tolerance", 1)),
      horizontalBarsDoor: Yup.number().required(functionValidation.plzEnter("horizontal bars door tolerance")).min(1, functionValidation.minmumNum("horizontal bars door tolerance", 1)),
      leftPanel: Yup.number().required(functionValidation.plzEnter("left panel tolerance")).min(1, functionValidation.minmumNum("left panel tolerance", 1)),
      rightPanel: Yup.number().required(functionValidation.plzEnter("right panel tolerance")).min(1, functionValidation.minmumNum("right panel tolerance", 1)),
      doorPanel: Yup.number().required(functionValidation.plzEnter("door panel tolerance")).min(1, functionValidation.minmumNum("door panel tolerance", 1)),
      cappingChannel: Yup.number().required(functionValidation.plzEnter("capping channel tolerance")).min(1, functionValidation.minmumNum("capping channel tolerance", 1)),
      endCoverTrims: Yup.number().required(functionValidation.plzEnter("end cover trims tolerance")).min(1, functionValidation.minmumNum("end cover trims tolerance", 1)),
    }),
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    Dispatched(getToleranceAction());
  }, []);
  React.useLayoutEffect(() => {
    setFieldsData(toleranceData)
  }, [toleranceData])

  return (
    <div>
      <BreadcrumbFn
        path={["productManagement"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.toleranceManagement,
        ]}
      />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">
              {appconstant.toleranceManagement}
            </h6>
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
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.headChannel}
                      name={"headChannel"}
                      placeholder={appconstant.headChannel}
                      onChange={onHandelChange}
                      value={values.headChannel}
                      errors={Boolean(touched.headChannel && errors.headChannel)}
                      helperText={touched.headChannel && errors.headChannel}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.floorChannelLeft}
                      name={"floorChannelLeft"}
                      placeholder={appconstant.floorChannelLeft}
                      onChange={onHandelChange}
                      value={values.floorChannelLeft}
                      errors={Boolean(touched.floorChannelLeft && errors.floorChannelLeft)}
                      helperText={touched.floorChannelLeft && errors.floorChannelLeft}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.floorChannelRight}
                      name={"floorChannelRight"}
                      placeholder={appconstant.floorChannelRight}
                      onChange={onHandelChange}
                      value={values.floorChannelRight}
                      errors={Boolean(touched.floorChannelRight && errors.floorChannelRight)}
                      helperText={touched.floorChannelRight && errors.floorChannelRight}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.verticalFramingChannel}
                      name={"verticalFramingChannel"}
                      placeholder={appconstant.verticalFramingChannel}
                      onChange={onHandelChange}
                      value={values.verticalFramingChannel}
                      errors={Boolean(touched.verticalFramingChannel && errors.verticalFramingChannel)}
                      helperText={touched.verticalFramingChannel && errors.verticalFramingChannel}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.horizontalFramingChannelLeft}
                      name={"horizontalFramingChannelLeft"}
                      placeholder={appconstant.horizontalFramingChannelLeft}
                      onChange={onHandelChange}
                      value={values.horizontalFramingChannelLeft}
                      errors={Boolean(touched.horizontalFramingChannelLeft && errors.horizontalFramingChannelLeft)}
                      helperText={touched.horizontalFramingChannelLeft && errors.horizontalFramingChannelLeft}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.horizontalFramingChannelRight}
                      name={"horizontalFramingChannelRight"}
                      placeholder={appconstant.horizontalFramingChannelRight}
                      onChange={onHandelChange}
                      value={values.horizontalFramingChannelRight}
                      errors={Boolean(touched.horizontalFramingChannelRight && errors.horizontalFramingChannelRight)}
                      helperText={touched.horizontalFramingChannelRight && errors.horizontalFramingChannelRight}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.horizontalFramingChannelDoor}
                      name={"horizontalFramingChannelDoor"}
                      placeholder={appconstant.horizontalFramingChannelDoor}
                      onChange={onHandelChange}
                      value={values.horizontalFramingChannelDoor}
                      errors={Boolean(touched.horizontalFramingChannelDoor && errors.horizontalFramingChannelDoor)}
                      helperText={touched.horizontalFramingChannelDoor && errors.horizontalFramingChannelDoor}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.horizontalBarsLeft}
                      name={"horizontalBarsLeft"}
                      placeholder={appconstant.horizontalBarsLeft}
                      onChange={onHandelChange}
                      value={values.horizontalBarsLeft}
                      errors={Boolean(touched.horizontalBarsLeft && errors.horizontalBarsLeft)}
                      helperText={touched.horizontalBarsLeft && errors.horizontalBarsLeft}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.horizontalBarsRight}
                      name={"horizontalBarsRight"}
                      placeholder={appconstant.horizontalBarsRight}
                      onChange={onHandelChange}
                      value={values.horizontalBarsRight}
                      errors={Boolean(touched.horizontalBarsRight && errors.horizontalBarsRight)}
                      helperText={touched.horizontalBarsRight && errors.horizontalBarsRight}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.horizontalBarsDoor}
                      name={"horizontalBarsDoor"}
                      placeholder={appconstant.horizontalBarsDoor}
                      onChange={onHandelChange}
                      value={values.horizontalBarsDoor}
                      errors={Boolean(touched.horizontalBarsDoor && errors.horizontalBarsDoor)}
                      helperText={touched.horizontalBarsDoor && errors.horizontalBarsDoor}
                    />
                  </div>
                  {/* <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.leftPanel}
                      name={"leftPanel"}
                      placeholder={appconstant.leftPanel}
                      onChange={onHandelChange}
                      value={values.leftPanel}
                      errors={Boolean(touched.leftPanel && errors.leftPanel)}
                      helperText={touched.leftPanel && errors.leftPanel}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.rightPanel}
                      name={"rightPanel"}
                      placeholder={appconstant.rightPanel}
                      onChange={onHandelChange}
                      value={values.rightPanel}
                      errors={Boolean(touched.rightPanel && errors.rightPanel)}
                      helperText={touched.rightPanel && errors.rightPanel}
                    />
                  </div> */}
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.doorPanel}
                      name={"doorPanel"}
                      placeholder={appconstant.doorPanel}
                      onChange={onHandelChange}
                      value={values.doorPanel}
                      errors={Boolean(touched.doorPanel && errors.doorPanel)}
                      helperText={touched.doorPanel && errors.doorPanel}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.cappingChannel}
                      name={"cappingChannel"}
                      placeholder={appconstant.cappingChannel}
                      onChange={onHandelChange}
                      value={values.cappingChannel}
                      errors={Boolean(touched.cappingChannel && errors.cappingChannel)}
                      helperText={touched.cappingChannel && errors.cappingChannel}
                    />
                  </div>
                  <div className="form-group">
                    <Textfiled
                      disabled={inputFieldDisable}
                      className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                      label={appconstant.endCoverTrims}
                      name={"endCoverTrims"}
                      placeholder={appconstant.endCoverTrims}
                      onChange={onHandelChange}
                      value={values.endCoverTrims}
                      errors={Boolean(touched.endCoverTrims && errors.endCoverTrims)}
                      helperText={touched.endCoverTrims && errors.endCoverTrims}
                    />
                  </div>
                  <div>
                    <button type="submit" className="button-list">
                      {inputFieldDisable ? appconstant.edit : appconstant.buttonupate}
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
export default ToleranceManagement;
