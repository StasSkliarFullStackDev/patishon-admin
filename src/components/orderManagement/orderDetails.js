import React from "react";
import { Image } from 'antd';
import images from '../../themes/appImage'
import {
  Link, useLocation
} from "react-router-dom";
import { Breadcrumb, } from 'antd';
import appconstant from "../../themes/appconstant";
import { Dispatched, FirstLetterUpperCase } from "../../utils/utils";
import { orderDetailsAction } from "../../Redux/Actions/OrderManagement";
import { useSelector } from "react-redux";
import moment from "moment";
import { BreadcrumbFn } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const OrderDetails = () => {
  const data = useSelector(state => state.OrderManagementReducer.orderList)
  const { state } = useLocation()
  React.useEffect(() => {
    Dispatched(orderDetailsAction(state))
  }, [])

  console.log(data, 'useLocation');
  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "orderManagement"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.orderManagement,
          appconstant.orderDetails
        ]}
      />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
            <h6 className="text-white text-capitalize ps-3">{appconstant.orderDetails}</h6>
          </div>
          <div className="wrapper_line view_modules view">
            <div className="datacenter">
              <label>{appconstant.productImage}</label>
              <Image
                width={100}
                height={100}
                alt={""}
                src={appconstant.ImageUrl + data?.product?.image}
              />
            </div>
            <div className='main-ong-div'>
              <div>
                <label>{appconstant.orderID}</label>
                <p>{data?.orderId}</p>
              </div>
              <div>
                <label>{appconstant.productName}</label>
                <p>{data?.product?.name}</p>
              </div>
              <div>
                {/* <div>
                  <label>{appconstant.customerName}</label>
                  <p>John Doe</p>
                </div> */}
                <div>
                  <label>{appconstant.orderPice}</label>
                  <p>{data?.price}</p>
                </div>
                <div>
                  <label>{appconstant.orderDateTime}</label>
                  <p>{moment(data?.createdAt).format(appconstant.dateAndTimeFormat)}</p>
                </div>
              </div>
            </div>
            <div className='conf-det'>
              <div>
                <h3>Configuration Details
                </h3></div>
            </div>
            <div className='main-ong-div'>
              <div>
                <label>{appconstant.roomSize}</label>
                <p>{`${data?.roomSize?.length} * ${data?.roomSize?.width}`}</p>
              </div>
              <div>
                <div>
                  <label>{appconstant.partition}</label>
                  <p>{data?.partition}</p>
                </div>
                <div>
                  <label>{appconstant.leftPannel}</label>
                  <p>{data?.leftPanelSize}</p>
                </div>
                <div>
                  <label>{appconstant.rightPannel}</label>
                  <p>{data?.rightPanelSize}</p>
                </div>
                <div>
                  <label>{appconstant.frameVariant}</label>
                  <div className="box" style={{ backgroundColor: data?.frameVarient }}></div>
                </div>
                <div>
                  <label>{appconstant.frame}</label>
                  <p>{data?.frameType}</p>
                </div>
                <div>
                  <label>{appconstant.doorChannel}</label>
                  <p>{FirstLetterUpperCase(data?.doorChannel) || "N/A"}</p>
                </div>

                <div>
                  <label>{appconstant.doorGlassm}</label>
                  <p>{FirstLetterUpperCase(data?.doorGlass) || "N/A"}</p>
                </div>
                <div>
                  <label>{appconstant.doorCategoryHinges}</label>
                  <p>{(data?.doorCategory && data?.doorHinges) ? `${FirstLetterUpperCase(data?.doorCategory)}/${FirstLetterUpperCase(data?.doorHinges)}` : "N/A"}
                  </p>
                </div>
                {/* <div>
                  <label>{appconstant.handle}</label>
                  <p>{FirstLetterUpperCase(data?.handleType)}</p>
                </div> */}
                {data?.handleVarient &&
                  <div>
                    <label>{appconstant.handleVariant}</label>
                    <br />
                    <Image
                      width={70}
                      height={70}
                      src={appconstant.ImageUrl + data?.handleVarient}
                    />
                  </div>
                }
                <div>
                  <label>{appconstant.film}</label>
                  <p>{FirstLetterUpperCase(data?.film)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OrderDetails