import { Tabs } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import { Table, Modal } from 'antd';
import appconstant from "../../themes/appconstant";
import { Dispatched } from '../../utils/utils';
import { doorChannelListAction, doorSizeEnableDisableAction, doorTypeEnableDisableAction } from '../../Redux/Actions/ConfigManagement';
import { useSelector } from 'react-redux';
import { toLower } from 'lodash';
import { BreadcrumbFn } from '../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { functionValidation } from '../../utils/functionValidation';
const { TabPane } = Tabs;
let tabNavigate = "single"

const DoorChannel = () => {
    const [typePagination, setTypePagination] = useState({ singleDoor: { sortBy: "", order: "", offset: 0 }, type: tabNavigate, doubleDoor: { sortBy: "", order: "", offset: 0 } })
    const data = useSelector((state) => state.configReducer.doorChannelList?.data)

    const onChange = (key) => {
        tabNavigate = key;
        const selectedTab = key === "single" ? typePagination.singleDoor : typePagination.doubleDoor
        Dispatched(doorChannelListAction({ type: key, ...selectedTab }))
        setTypePagination(state => ({ ...state, type: key }))
    };
    const singleDoorTableChange = (e, _, data) => {
        Dispatched(doorChannelListAction({
            sortBy: data?.order ? data?.field : "",
            order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
            offset: (e.current - 1) * 10,
            type: typePagination.type
        }))
        setTypePagination(state => ({
            ...state, singleDoor: {
                sortBy: data?.order ? data?.field : "",
                order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
                offset: (e.current - 1) * 10
            }
        }))
    }

    const edit = (e) => {
        if (typePagination.type == "single") {
            localStorage.setItem("singleDoorChannel", JSON.stringify(e))
        } else {
            localStorage.setItem("doubleDoorChannel", JSON.stringify(e))
        }
    }

    const doubleDoorTableChange = (e, _, data) => {
        Dispatched(doorChannelListAction({
            sortBy: data?.order ? data?.field : "",
            order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
            offset: (e.current - 1) * 10,
            type: typePagination.type
        }))
        setTypePagination(state => ({
            ...state, doubleDoor: {
                sortBy: data?.order ? data?.field : "",
                order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
                offset: (e.current - 1) * 10
            }
        }))
    }

    const disableDoor = () => {
        const msg = data?.doorType?.isEnabled ? appconstant.disable : appconstant.enable
        const selectedTab = typePagination.type === "single" ? typePagination.singleDoor : typePagination.doubleDoor
        Modal.confirm({
            title: msg,
            content: `Are you sure, you want to ${toLower(msg)} this door type?`,
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                Dispatched(doorTypeEnableDisableAction([data?._id, { ...selectedTab, type: typePagination.type }]))
            },
            onCancel() {
            },
            className: "new-button"
        });
    };

    const deleteModel2 = (id, deactivate) => {

        const msg = deactivate ? appconstant.deactivate : appconstant.activate
        const selectedTab = typePagination.type === "single" ? typePagination.singleDoor : typePagination.doubleDoor
        Modal.confirm({
            title: msg,
            content: functionValidation.areYouSure(msg.toLowerCase(), "size"),
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                Dispatched(doorSizeEnableDisableAction([id, { ...selectedTab, type: typePagination.type }]))
            },
            onCancel() {
            },
            className: "new-button"
        });
    }

    const columns = [{
        title: 'Sr. No.',
        dataIndex: 'srno',
        key: 'srno',
        sorter: false,
        render: (value, item, index) => (index + 1)
    },
    {
        title: ' Size (mm) ',
        dataIndex: 'size',
        key: 'size',
        sorter: true,
    },
    {
        title: ' Price (£) ',
        dataIndex: 'price',
        key: 'events',
        sorter: true,
    },
    {
        title: 'Action',
        key: '_id',
        render: (e, { _id }) => {
            return (
                <div>{data?.doorType?.isEnabled ?
                    <Link to="/editSingleDoor">
                        <button type="submit" onClick={() => edit(e)} >{appconstant.edit}</button>
                    </Link> : <div className="disabledEditButton" type="submit" >{appconstant.edit}</div>
                }
                    {data?.doorType?.isEnabled ?
                        <button type="submit" onClick={() => deleteModel2(_id, e.isActivated)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button> :
                        <div className="disabledEditButton" type="submit" >{e.isActivated ? appconstant.deactivate : appconstant.activate}</div>
                    }
                </div>
            )
        }
    },
    ];
    const columns2 = [{
        title: 'Sr. No.',
        dataIndex: 'srno',
        key: 'srno',
        sorter: false,
        render: (value, item, index) => (index + 1)
    },
    {
        title: ' Size (mm)',
        dataIndex: 'size',
        key: 'size',
        sorter: true,
    },
    {
        title: ' Price (£)',
        dataIndex: 'price',
        key: 'events',
        sorter: true,
    },
    {
        title: 'Action',
        key: 'Posted',
        render: (e, { _id }) => {
            return (
                <div>{data?.doorType?.isEnabled ?
                    <Link to="/editDoubleDoor">
                        <button type="submit" onClick={() => edit(e)} >{appconstant.edit}</button>
                    </Link> :
                    <div className="disabledEditButton" type="submit" >{appconstant.edit}</div>
                }
                    {
                        data?.doorType?.isEnabled ?
                            <button type="submit" onClick={() => deleteModel2(_id, e.isActivated)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button> :
                            <div className="disabledEditButton" type="submit" >{e.isActivated ? appconstant.deactivate : appconstant.activate}</div>
                    }
                </div>
            )
        }
    },
    ];

    useEffect(() => {
        Dispatched(doorChannelListAction({
            type: tabNavigate,
            sortBy: "",
            order: ""
        }))
    }, [])

    return (
        <div>
            <BreadcrumbFn
                path={["productManagement", "config"]}
                pathName={[
                    <FontAwesomeIcon icon={faHome} />,
                    appconstant.ConfigurationManagement,
                    appconstant.doorChannel,
                ]}
            />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 className="text-white text-capitalize ps-3" style={{ padding: 1, }}>{appconstant.doorChannel}</h6>
                    </div>
                    <Tabs defaultActiveKey="1" onChange={onChange} activeKey={tabNavigate}>
                        <TabPane tab="Single Door " key="single">
                            <div className='main-ong-div'>
                                <div className='ong-event'>
                                    <div>
                                        <h2>Single Door</h2></div>
                                    <div>
                                        <button className='ant-button2' type="submit" onClick={disableDoor} >{data?.doorType?.isEnabled ? appconstant.disable : appconstant.enable}</button>
                                    </div>
                                </div>
                                <div className="wrapper_line view_modules view">
                                    <div>
                                        <label>{appconstant.doorType}</label>
                                        <p>Single Door</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='panels-outlet'>Sizes</h3>
                                </div>
                                <Table pagination={false} dataSource={data?.doorSize} columns={columns} onChange={singleDoorTableChange} showSorterTooltip={false} />
                            </div>
                        </TabPane>
                        <TabPane tab="Double Door" key="double">
                            <div className='main-ong-div'>
                                <div className='ong-event'>
                                    <div>
                                        <h2>Double Door</h2></div>
                                    <div>
                                        <button className='ant-button2' type="submit" onClick={disableDoor} >{data?.doorType?.isEnabled ? appconstant.disable : appconstant.enable}</button>
                                    </div>
                                </div>
                                <div className="wrapper_line view_modules view">
                                    <div>
                                        <label>{appconstant.doorType}</label>
                                        <p>Double Door</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='panels-outlet'>Sizes</h3>
                                </div>
                                <Table pagination={false} dataSource={data?.doorSize} columns={columns2} onChange={doubleDoorTableChange} showSorterTooltip={false} />
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default DoorChannel