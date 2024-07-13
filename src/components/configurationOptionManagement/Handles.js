import React, { useState, useEffect } from "react"
import {
    Link
} from "react-router-dom";
import { Table, Modal } from 'antd';
import appconstant from "../../themes/appconstant";
import { Dispatched } from "../../utils/utils";
import { handleVariantActiveDeactiveAction, handleVariantDefaultAction, handleVariantListAction } from "../../Redux/Actions/ConfigManagement";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import Textfiled from "../../common/Textfield";
import { toLower } from "lodash";
import { BreadcrumbFn } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Handles = () => {
    const [pagination, setPagination] = useState({ search: "", sortBy: "", order: "", offset: 0 });
    const data = useSelector(state => state.configReducer?.handleVariantList)

    const disableModel = (record, id) => {
        const msg = record ? appconstant.deactivate : appconstant.activate
        Modal.confirm({
            title: msg,
            content: `Are you sure, you want to ${toLower(msg)} this handle variants?`,
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                Dispatched(handleVariantActiveDeactiveAction([id, pagination]))
            },
            onCancel() {
            },
            className: "new-button"
        });
    };

    const makeDefalutModel = (id) => {
        Modal.confirm({
            title: "Mark As Default",
            content: `Are you sure, you want to mark this handle variant as default?`,
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                Dispatched(handleVariantDefaultAction([id, pagination]))
            },
            onCancel() {
            },
            className: "new-button"
        });
    }

    const tableChange = (e, _, data) => {
        Dispatched(handleVariantListAction({
            search: pagination.search,
            sortBy: data?.order ? data?.field : "",
            order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
            offset: (e.current - 1) * 10
        }))
        setPagination((state) => ({
            offset: (e.current - 1) * 10, sortBy: data?.order ? data?.field : "",
            order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "", ...state
        }))
    }

    const onSearch = debounce((e) => {
        Dispatched(handleVariantListAction({ ...pagination, search: e.target.value }))
        setPagination(state => ({ ...state, search: e.target.value }))
    }, 300)

    const edit = (price, id, img, size) => {
        localStorage.setItem("editHandlePrice", JSON.stringify({ id: id, price: price, image: img, size: size }))
    }

    const columns = [{
        title: 'Sr. No.',
        dataIndex: 'srno',
        key: 'srno',
        sorter: false,
        render: (value, item, index) => (index + 1) + pagination.offset
    },
    {
        title: 'Variants Type',
        dataIndex: 'type',
        key: 'type',
        sorter: false,
        render: (e) => <img alt="texture" src={appconstant.ImageUrl + e} />
    },
    {
        title: 'Price (£)',
        dataIndex: 'price',
        key: 'events',
        sorter: true,
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        sorter: true,
    },
    {
        title: 'Action',
        key: '_id',
        render: (e, { _id }) => {
            return (
                <div>
                    <Link to="/editHandlePrice">
                        <button type="submit" onClick={() => edit(e.price, _id, e.type, e.size)}>{appconstant.edit}</button>
                    </Link>
                    <button type="submit" onClick={() => disableModel(e.isActivated, _id)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button>
                    {e.isDefault ?
                        <div className="disabledButton" type="submit" disabled={e.isDefault} >{appconstant.MarkAsDefault}</div> :
                        <button className="ant-table-btn" onClick={() => makeDefalutModel(_id)} type="submit">{appconstant.MarkAsDefault}</button>
                    }
                </div>
            )
        }
    },
    ];

    useEffect(() => {
        Dispatched(handleVariantListAction(pagination))
    }, [])

    return (
        <div>
            <BreadcrumbFn
                path={["productManagement", "config"]}
                pathName={[
                    <FontAwesomeIcon icon={faHome} />,
                    appconstant.ConfigurationManagement,
                    appconstant.handles,
                ]}
            />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 className="text-white text-capitalize ps-3">{appconstant.handles}</h6>
                    </div>
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 className="text-white text-capitalize ps-3">{appconstant.handleVariants}</h6>
                        <Textfiled type="number" className="iocn-search  search-bar" placeholder="Search" onChange={onSearch} />
                    </div>
                    <Table pagination={{ total: data?.pagination?.totalCount, current: data?.pagination?.currentPage, }} dataSource={data?.data} columns={columns} showSorterTooltip={false} onChange={tableChange} />
                </div>
            </div>
        </div>

    )
}
export default Handles
