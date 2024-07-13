import React, { useState } from "react"
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { handleEditAction } from "../../Redux/Actions/ConfigManagement";
import { Formik, } from "formik";
import * as Yup from 'yup'
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import images from "../../themes/appImage";
import { functionValidation } from "../../utils/functionValidation";
import { Dispatched } from "../../utils/utils";
import { BreadcrumbFn, removeItem } from "../../common";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditHandelPrice = () => {
  const data = JSON.parse(localStorage.getItem("editHandlePrice"))
  const [fieldsData, setFieldsData] = useState({
    price: data?.price,
    size: data?.size,
  });

  const onFormSubmit = ({ price, size }) => {
    Dispatched(handleEditAction({
      id: data?.id,
      size: size,
      price: price
    }))
  }

  const onHandelChange = (e) => {
    let data = e.target.value;
    if (e.target?.name == "size" && +data > 499) {
      return
    }
    let afterDecimal = e.target.value.split(".")[1]?.slice(0, 2)
    data = Math.max(0, (e.target.value).split(".")[0]).toString().slice(0, 4);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    data = `${data}${afterDecimal || e.target.value.endsWith(".")? "." + afterDecimal : ''}`
    setFieldsData((state) => {
      return { ...state, [e.target?.name]: +data };
    });
  };
  const validate = {
    edit: Yup.object({
      price: Yup.number().required(functionValidation.plzEnter("price")).min(0.01, functionValidation.minmum("Price", 0.01)),
      size: Yup.number().required(functionValidation.plzEnter("size")).min(1, functionValidation.minmumNum("Size", 1))
    }),
  };

  React.useEffect(() => {
    return removeItem("editHandlePrice")
  }, [])
  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config", "handles"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.handles,
          appconstant.editHandlePrice
        ]}
      />
      {/* <Breadcrumb>
        <Breadcrumb.Item><Link to="/productManagement">{appconstant.home}</Link></Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/config">
            {appconstant.ConfigurationManagement}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/handles">
          {appconstant.handles}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{appconstant.editHandlePrice}</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">{appconstant.editHandlePrice}</h6>
          </div>
          <div className="wrapper_line view_modules view">
            <div className="datacenter">
              <label>{appconstant.variantImage}</label>
              <img className="displayImage" src={appconstant.ImageUrl + data?.image} style={{ width: '100px', Height: '200px' }}
                alt={images.usermessage}
              />
            </div>
            <Formik
              initialValues={fieldsData}
              enableReinitialize
              onSubmit={onFormSubmit}
              validationSchema={validate.edit}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div>
                    <label>{appconstant.price}</label>
                    <Textfiled
                      maxLength={5}
                      className='form-control'
                      type='number'
                      name={"price"}
                      placeholder='Price'
                      value={values.price}
                      errors={Boolean(errors.price && touched.price)}
                      helperText={touched.price && errors.price}
                      onChange={onHandelChange}
                    />
                  </div>
                  <div>
                    <label>{appconstant.size}</label>
                    <Textfiled
                      maxLength={5}
                      className='form-control'
                      type='number'
                      name={"size"}
                      placeholder='Size'
                      value={values.size}
                      errors={Boolean(errors.size && touched.size)}
                      helperText={touched.size && errors.size}
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
export default EditHandelPrice 
