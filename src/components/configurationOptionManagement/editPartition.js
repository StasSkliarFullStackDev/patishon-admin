import React, { useEffect } from "react"
import {
  Link
} from "react-router-dom";
import { Breadcrumb } from 'antd';
import appconstant from "../../themes/appconstant";
import Textfiled from "../../common/Textfield";

const EditPartition = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/productManagement">{appconstant.home}</Link></Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/config">
            {appconstant.ConfigurationManagement}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/partition">{appconstant.partition}</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{appconstant.editPartition}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">{appconstant.editPartition}</h6>
          </div>
          <div className="wrapper_line view_modules view">
            <div>
              <label>{appconstant.permmPrice}</label>
              <Textfiled
                className='form-control'
                type='text'
                placeholder='Per mm Price'
              />
            </div>
            <div>
              <Link to="/partition"><button type="submit" className="button-list">{appconstant.buttonupate}</button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
export default EditPartition
