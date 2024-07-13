import React, { useEffect } from "react"
import images from '../../themes/appImage'
import * as Yup from 'yup'
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { useState } from "react";
import { useRef } from "react";
import { toaster } from "../../utils/Toaster";
import { filmUpdateAction } from "../../Redux/Actions/ConfigManagement";
import { Dispatched } from "../../utils/utils";
import { BreadcrumbFn, removeItem } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import { functionValidation } from "../../utils/functionValidation";
import moment from "moment";

const EditFilmDetails = () => {
  const [image, setImage] = useState()
  let data = JSON.parse(localStorage.getItem("editFilm"))
  const [fieldsData, setFieldsData] = useState({
    price: data?.price,
  });

  const refs = useRef()

  const imageSet = e => {
    if (
      e.target.files[0]?.type === appconstant.extentions.jpeg ||
      e.target.files[0]?.type === appconstant.extentions.jpg ||
      e.target.files[0]?.type === appconstant.extentions.png
    ) {
      if (e.target.files[0]?.size < appconstant.imageSize) {
        setImage(e.target.files[0])
      } else {
        toaster(appconstant.fileSize)
      }
    } else {
      toaster(appconstant.fileExtention)
    }
  }
  const onFormSubmit = ({ price }) => {
    let body = new FormData()
    if (image) {
      body.append("image", image)
    }
    body.append("filmId", data._id)
    body.append("price", price)
    Dispatched(filmUpdateAction([body]))
  }
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
      return { price: data };
    });
  };


  useEffect(() => {
    return removeItem("editFilm")
  }, [])

  return (

    <div>
      <BreadcrumbFn
        path={["productManagement", "config", "film"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.film,
          appconstant.editFilmDetails
        ]}
      />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 class="text-white text-capitalize ps-3">{appconstant.editFilmDetails}</h6>
          </div>
          <div className="wrapper_line view_modules view">
            <div className="datacenter">
              <img
                className="film-img"
                alt=""
                type='image'
                src={image
                  ? URL.createObjectURL(image)
                  : data?.image
                    ? appconstant.ImageUrl + data?.image
                    : images.usermessage}
              />
              <img
                alt=""
                type='image'
                src={images.pluss}
                onClick={() => refs.current.click()}
                className="datacenter-icon" />
              <input
                type='file'
                style={{ display: 'none' }}
                ref={refs}
                onChange={imageSet}
                accept={Object.values(appconstant.extentions)} />
            </div>
            <Formik
              initialValues={fieldsData}
              enableReinitialize
              onSubmit={onFormSubmit}
              validationSchema={validate.edit}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{appconstant.filmName}</label>
                    <p>{data?.name}</p>
                    <label>{appconstant.price}</label>
                    <Textfiled
                      maxLength={5}
                      className='form-control'
                      type='number'
                      placeholder='Price'
                      value={values.price}
                      errors={Boolean(errors.price && touched.price)}
                      helperText={touched.price && errors.price}
                      onChange={onHandelChange} />
                  </div><div>
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
export default EditFilmDetails
