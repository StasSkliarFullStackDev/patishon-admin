import React, { useEffect, useState } from "react"
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";
import { useSelector } from "react-redux";
import { panelUpdateAction, panelViewAction } from "../../Redux/Actions/ConfigManagement";
import { Formik, } from "formik";
import * as Yup from 'yup'
import { functionValidation } from "../../utils/functionValidation";
import { BreadcrumbFn, } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Dispatched } from "../../utils/utils";

const Panels = () => {
    const data = useSelector((data) => data.configReducer.panelDetails)

    const [inputFieldDisable, setInputFieldDisable] = useState(true)
    const [fieldsData, setFieldsData] = useState(data);

    const onFormSubmit = (e) => {
        if (inputFieldDisable) {
            setInputFieldDisable(!inputFieldDisable)
        } else {
            Dispatched(panelUpdateAction(e))
        }
    }

    const validate = {
        edit: Yup.object({
            perPanelPrice: Yup.number().required(functionValidation.plzEnter("per panel price")).min(0.01, functionValidation.minmum("Per panel price", 0.01)),
            panelPricePermm: Yup.number().required(functionValidation.plzEnter("price per mm")).min(0.01, functionValidation.minmum("Price per mm", 0.01)),
        })
    }

    const onHandelChange = (e) => {
        let data = e.target.value;
        let afterDecimal = e.target.value.split(".")[1]?.slice(0, 2)
        data = Math.max(0, (e.target.value).split(".")[0]).toString().slice(0, 4);
        data = data?.length === 0 || data === "NaN" ? "" : data;
        data = `${data}${afterDecimal || e.target.value.endsWith(".")? "." + afterDecimal : ''}`

        // setFieldsData((state) => {
        //     return { price: data, size: state.size };
        // });
        setFieldsData((state) => {
            return { ...state, [e.target?.name]: data };
        });
    };

    useEffect(() => {
        Dispatched(panelViewAction())
    }, [])

    useEffect(() => {
        setFieldsData(data)
    }, [data])

    return (
        <div>
            <BreadcrumbFn
                path={["productManagement", "config"]}
                pathName={[
                    <FontAwesomeIcon icon={faHome} />,
                    appconstant.ConfigurationManagement,
                    appconstant.panels,
                ]}
            />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">{appconstant.editPanelDetails}</h6>
                    </div>
                    <Formik
                        initialValues={fieldsData}
                        enableReinitialize
                        onSubmit={onFormSubmit}
                        validationSchema={validate.edit}
                    >
                        {({ values, errors, handleChange, handleSubmit, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="wrapper_line view_modules view">
                                    <div className="form-group">
                                        <label>{appconstant.perPanelPrice}</label>
                                        <Textfiled
                                            className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                                            type={`${!inputFieldDisable} ? 'number' : '`}
                                            // maxLength={4}
                                            placeholder={appconstant.perPanelPrice}
                                            name={"perPanelPrice"}
                                            disabled={inputFieldDisable}
                                            value={values?.perPanelPrice}
                                            onChange={onHandelChange}
                                            maxNumber={1000}
                                            errors={Boolean(errors.perPanelPrice && touched.perPanelPrice)}
                                            helperText={touched.perPanelPrice && errors.perPanelPrice}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{appconstant.perMmPrice}</label>
                                        <Textfiled
                                            className={`form-control ${inputFieldDisable ? "disabled" : ""}`}
                                            type={`${!inputFieldDisable} ? 'number' : '`}
                                            //   maxLength={4}
                                            placeholder={appconstant.perMmPrice}
                                            name={"panelPricePermm"}
                                            disabled={inputFieldDisable}
                                            value={values?.panelPricePermm}
                                            onChange={onHandelChange}
                                            errors={Boolean(errors.panelPricePermm && touched.panelPricePermm)}
                                            helperText={touched.panelPricePermm && errors.panelPricePermm}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="button-list">{inputFieldDisable ? appconstant.edit : appconstant.buttonupate}</button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}
export default Panels
