import React from "react"
import images from '../../themes/appImage'

import {
  Link
} from "react-router-dom";
import { Breadcrumb } from 'antd';
import appconstant from "../../themes/appconstant";

const ProductDetails = () => {

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/productManagement">{appconstant.home}</Link></Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/productManagement">{appconstant.productManagement}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{appconstant.productDetails}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">{appconstant.productDetails}</h6>
          </div>
          <div className="wrapper_line view_modules view">
            <div className="datacenter">
              <label>{appconstant.productImage}</label>
              <img src={images.usermessage} style={{ width: '100px', Height: '200px' }} />
            </div>

            <div>
              <label>{appconstant.productName}</label>
              <p>Fixed to two walls</p>
            </div>
            <div>
              <label>{appconstant.price}</label>
              <p>220</p>
            </div>
            <div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails
