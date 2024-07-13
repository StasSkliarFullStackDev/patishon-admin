import React, { useState } from "react"
import {
    Link
} from "react-router-dom";
import { Breadcrumb } from 'antd';
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Dispatched } from "../../utils/utils";
import { doorChannelEditAction } from "../../Redux/Actions/ConfigManagement";
import { functionValidation } from "../../utils/functionValidation";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadcrumbFn, removeItem } from "../../common";

const EditSingleDoor = () => {
    const data = JSON.parse(localStorage.getItem("singleDoorChannel"))

    const [fieldsData, setFieldsData] = useState({
        price: data?.price,
        size: data?.size
    });

    const onFormSubmit = ({ _id, price, size }) => {
        Dispatched(doorChannelEditAction({ id: data._id, doorPrice: price, doorSize: size }))
    }

    const onHandelChange = (e) => {
        let data = e.target.value;
        let afterDecimal = e.target.value.split(".")[1]?.slice(0,2)
        data = Math.max(0, (e.target.value).split(".")[0]).toString().slice(0, 4);
        data = data?.length === 0 || data === "NaN" ? "" : data;
        data = `${data}${afterDecimal  ? "."+afterDecimal : ''}`
        setFieldsData((state) => {
            return { price: data, size: state.size };
        });
    };

    const onSizeChange = (e) => {
        let data = e.target.value;
        data = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4);
        data = data?.length === 0 || data === "NaN" ? "" : data;
        setFieldsData((state) => {
            return { price: state.price, size: data };
        });
    };

    const validate = {
        edit: Yup.object({
            price: Yup.number().required(functionValidation.plzEnter("price")).min(0.01, functionValidation.minmum("Price", 0.01)),
            size: Yup.number().required(functionValidation.plzEnter("size")).min(1, functionValidation.minmumNum("Size", 1))
        }),
    };

    React.useEffect(() => {
        return removeItem("singleDoorChannel")
    }, [])
    return (
        <div>
            <BreadcrumbFn
                path={["productManagement", "config", "doorChannel"]}
                pathName={[
                    <FontAwesomeIcon icon={faHome} />,
                    appconstant.ConfigurationManagement,
                    appconstant.doorChannel,
                    appconstant.editSingleDoor,
                ]}
            />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">{appconstant.editSingleDoor}</h6>
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
                                        <p>Single Door</p>
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
export default EditSingleDoor
