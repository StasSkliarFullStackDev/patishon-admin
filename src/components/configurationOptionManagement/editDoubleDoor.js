import React, { useState } from "react"
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { Formik } from "formik";
import { doorChannelEditAction } from "../../Redux/Actions/ConfigManagement";
import { Dispatched } from "../../utils/utils";
import * as Yup from 'yup';
import { functionValidation } from "../../utils/functionValidation";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadcrumbFn, removeItem } from "../../common";

const EditDoubleDoor = () => {
  const data = JSON.parse(localStorage.getItem("doubleDoorChannel"))
  const [fieldsData, setFieldsData] = useState({
    price: data?.price,
    size: data?.size
  });

  const onFormSubmit = ({ price, size }) => {
    Dispatched(doorChannelEditAction({ id: data._id, doorPrice: price, doorSize: size }))
  }

  const onHandelChange = (e) => {
    let data = e.target.value;
    let afterDecimal = e.target.value.split(".")[1]?.slice(0, 2)
    data = Math.max(0, (e.target.value).split(".")[0]).toString().slice(0, 4);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    data = `${data}${afterDecimal ? "." + afterDecimal : ''}`
    setFieldsData((state) => {
      return { price: data, size: state.size };
    });
  };

  const validate = {
    edit: Yup.object({
      price: Yup.number().required(functionValidation.plzEnter("price")).min(0.01, functionValidation.minmum("Price", 0.01))
    }),
  };
  const onSizeChange = (e) => {
    let data = e.target.value;
    data = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    setFieldsData((state) => {
      return { price: state.price, size: data };
    });
  };
  React.useEffect(() => {
    return removeItem("doubleDoorChannel")
  }, [])
  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config", "doorChannel"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.doorChannel,
          appconstant.editDoubleDoor,
        ]}
      />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">{appconstant.editDoubleDoor}</h6>
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
                    <label>{appconstant.doorType}</label>
                    <p>Double Door</p>
                  </div>
                  <div className="form-group">
                    <label>{appconstant.size}</label>
                    <Textfiled
                      className='form-control'
                      type='number'
                      placeholder='Size'
                      disabled
                      value={values.size}
                      errors={Boolean(errors.size && touched.size)}
                      helperText={touched.size && errors.size}
                      onChange={onSizeChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>{appconstant.price}</label>
                    <Textfiled
                      className='form-control'
                      type='number'
                      placeholder='Price'
                      value={values.price}
                      errors={Boolean(errors.price && touched.price)}
                      helperText={touched.price && errors.price}
                      onChange={onHandelChange}
                    />
                  </div>
                  <div>
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
export default EditDoubleDoor
