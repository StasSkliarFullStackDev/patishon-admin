import React, { useEffect, useState } from "react"
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { frameTypeUpdateAction } from "../../Redux/Actions/ConfigManagement";
import { Formik, } from "formik";
import * as Yup from 'yup'
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { functionValidation } from "../../utils/functionValidation";
import { Dispatched } from "../../utils/utils";
import { BreadcrumbFn, removeItem } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";



const EditSingleMetalGlazed = () => {

  const data = JSON.parse(localStorage.getItem("editFrame"))
  const [fieldsData, setFieldsData] = useState({ price: data?.price });

  useEffect(() => {
    window.scrollTo(0, 0)
    return removeItem("editFrame")
  }, [])

  const onFormSubmit = ({ price }) => {
    Dispatched(frameTypeUpdateAction({ frameTypeId: data?.id, framePrice: price }))
  }

  const validate = Yup.object().shape({
    price: Yup.number().required(functionValidation.plzEnter("frame price")).min(0.01, functionValidation.minmum("Frame price per mm", 0.01))
  })
  const onHandelChange = (e) => {
    let data = e.target.value;
    let afterDecimal = e.target.value.split(".")[1]?.slice(0, 2)
    data = Math.max(0, (e.target.value).split(".")[0]).toString().slice(0, 4);
    data = data?.length === 0 || data === "NaN" ? "" : data;
    data = `${data}${afterDecimal || e.target.value.endsWith(".")? "." + afterDecimal : ''}`

    setFieldsData((state) => {
      return { ...state, price: data };
    });
  };

  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config", "frameAndColor"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.frameAndColor,
          appconstant.editframetype
        ]}
      />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">{appconstant.editframetype}</h6>
          </div>
          <div className="wrapper_line view_modules view">
            <Formik
              initialValues={fieldsData}
              enableReinitialize
              onSubmit={onFormSubmit}
              validationSchema={validate}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{appconstant.frameType}</label>
                    <p>{data?.type}</p>
                  </div>
                  <div>
                    <label>{appconstant.framePrice}</label>
                    <Textfiled
                      className='form-control'
                      type='number'
                      placeholder='Frame Price'
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
export default EditSingleMetalGlazed 
