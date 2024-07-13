
import React from "react";
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, } from "@fortawesome/free-solid-svg-icons";
import { Table } from 'antd';
import appconstant from "../../themes/appconstant";
import { BreadcrumbFn } from "../../common";
import { Dispatched } from "../../utils/utils";
import { debounce } from "lodash";
import { ProductManagementAction } from "../../Redux/Actions/OrderManagement";
import { useSelector } from "react-redux";
import moment from "moment";

const OrderManagement = () => {
    const [details, setDetails] = React.useState({
        limit: 10, sort: "", search: "", order: "", offset: 0
    })

    const columns = [{
        title: 'Sr. No.',
        dataIndex: 'srno',
        key: 'srno',
        sorter: false,
        render: (value, item, index) => (details.offset + index + 1)
    },
    {
        title: 'Order ID ',
        dataIndex: 'orderId',
        key: 'orderId',
        sorter: true,
    },
    {
        title: 'Order Date/Time  ',
        dataIndex: 'createdAt',
        key: 'createdAt',
        sorter: true,
        render: (e) => moment(e).format(appconstant.dateAndTimeFormat)
    },
    {
        title: 'Action',
        dataIndex: '',
        key: '',
        render: (e) => {
            return (
                <div>
                    <Link to="/orderDetails" state={e._id}>
                        <button type="submit" >{appconstant.view}</button>
                    </Link>
                    <button type="submit" className="button-list" onClick={() => downloadPdf(e.pdf)}>{appconstant.download}</button>
                </div>
            )
        }
    },
    ];

    const orderData = useSelector(state => state.OrderManagementReducer.orderList)

    const downloadPdf = (URLToPDF) => {
        fetch(appconstant.ImageUrl + URLToPDF).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    const onChange = (e, _, data) => {
        Dispatched(ProductManagementAction({
            "search": details.search,
            "sort": data.order ? data.field : "",
            "order": data.order === "ascend" ? 1 : data.order === "descend" ? -1 : "",
            "offset": (e.current - 1) * 10,
            "limit": 10
        }))
        setDetails((state) => ({
            ...state, offset: (e.current - 1) * 10, sort: data.order ? data.field : "",
            order: data.order === "ascend" ? 1 : data.order === "descend" ? -1 : "", limit: 10
        }))
    }

    const search = debounce((e) => {
        Dispatched(ProductManagementAction({ ...details, search: e.target.value, offset: 0 }))
        setDetails((state) => ({ ...state, search: e.target.value, offset: 0 }))
    }, 300)

    React.useEffect(() => {
        Dispatched(ProductManagementAction(details))
    }, [])

    return (
        <div>
            <BreadcrumbFn
                path={["productManagement"]}
                pathName={[
                    <FontAwesomeIcon icon={faHome} />,
                    appconstant.orderManagement,
                ]}
            />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 className="text-white text-capitalize ps-3">{appconstant.orderManagement}</h6>
                        <input type="text" onChange={search} className="iocn-search  search-bar" placeholder="Search" />
                    </div>
                    <Table dataSource={orderData?.list} pagination={{ total: orderData?.pagination?.totalCount, current: orderData?.pagination?.currentPage, }} onChange={onChange} columns={columns} showSorterTooltip={false} />
                </div>
            </div>
        </div>
    )
}
export default OrderManagement