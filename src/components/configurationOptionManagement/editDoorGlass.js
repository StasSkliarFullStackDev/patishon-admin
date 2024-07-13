import React, { useEffect, useState } from "react"
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import * as Yup from "yup";
import { Formik } from "formik";
import { Dispatched } from "../../utils/utils";
import { doorGlassEditAction, doorSizeListAction, } from "../../Redux/Actions/ConfigManagement";
import { functionValidation } from "../../utils/functionValidation";
import { BreadcrumbFn, removeItem } from "../../common";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditDoorGlass = () => {
  const data = JSON.parse(localStorage.getItem("editDoorGlass"))
  const [fieldsData, setFieldsData] = useState({
    price: data?.doorGlassPrice,
    glassSize: data?.glassSize
  });
  const onFormSubmit = (e) => {
    Dispatched(doorGlassEditAction({ doorGlassId: data._id, price: e.price, glassSize: e.glassSize }));
  };
  const validate = {
    edit: Yup.object({
      price: Yup.number().required(functionValidation.plzEnter("price")).min(0.01, functionValidation.minmum("Price", 0.01))
    }),
  };
  const onHandelChange = (e) => {
    let data = e.target.value;
    let afterDecimal = e.target.value.split(".")[1]?.slice(0, 2)
    data = Math.max(0, (e.target.value).split(".")[0]).toString().slice(0, 4);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    data = `${data}${afterDecimal || e.target.value.endsWith(".")? "." + afterDecimal : ''}`

    setFieldsData((state) => {
      return { price: data, glassSize: state.glassSize };
    });
  };

  const onSizeChange = (e) => {
    let data = e.target.value;
    data = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    setFieldsData((state) => {
      return { price: state.price, glassSize: data };
    });
  };


  useEffect(() => {
    Dispatched(doorSizeListAction())
    return removeItem("editDoorGlass")
  }, [])

  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config", "doorGlass"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.doorGlass,
          appconstant.editDoorGlass
        ]}
      />

      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">{appconstant.editDoorGlass}</h6>
          </div>
          <div className="wrapper_line view_modules view">
            <Formik
              initialValues={fieldsData}
              enableReinitialize
              onSubmit={onFormSubmit}
              validationSchema={validate.edit}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{appconstant.glassSize}</label>
                    <Textfiled
                      className='form-control editable'
                      type='number'
                      placeholder='Glass Size'
                      value={values.glassSize}
                      onChange={onSizeChange}
                      errors={Boolean(errors.glassSize && touched.glassSize)}
                      helperText={touched.glassSize && errors.glassSize}
                    />
                  </div>
                  <div className="form-group">
                    <label>{appconstant.price}</label>
                    <Textfiled
                      className='form-control editable'
                      type='number'
                      placeholder='Price'
                      value={values.price}
                      onChange={onHandelChange}
                      errors={Boolean(errors.price && touched.price)}
                      helperText={touched.price && errors.price}
                    />
                  </div>
                  <div>
                    <div className="form-group">
                      <label>{appconstant.channelSize}</label>
                      <p>{data.channel.size}</p>
                    </div>
                    <button type="submit" className="button-list">{appconstant.buttonupate}</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>

  )
}
export default EditDoorGlass
