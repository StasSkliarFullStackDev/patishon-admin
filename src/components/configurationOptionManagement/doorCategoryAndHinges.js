import { Tabs } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { Table, Modal } from 'antd';
import appconstant from "../../themes/appconstant";
import { Dispatched, FirstLetterUpperCase } from '../../utils/utils';
import { doorCategoryAndHingesListAction, doorCategoryEnableDisableAction, doorHingesActiveDeactiveAction } from '../../Redux/Actions/ConfigManagement';
import { useSelector } from 'react-redux';
import { toLower } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbFn } from '../../common';
import { functionValidation } from '../../utils/functionValidation';

const { TabPane } = Tabs;
let tabNavigate = "push"

const DoorCategoryAndHinges = () => {
    const [pagination, setPagination] = useState({ push: { sortBy: "", order: "", offset: 0 }, category: tabNavigate, pull: { sortBy: "", order: "", offset: 0 } })
    const data = useSelector((state) => state.configReducer.doorCategoryAndHingesList?.data)

    const disableCategory = () => {
        const msg = data?.doorCategory?.isEnabled ? appconstant.disable : appconstant.enable
        const selectedTab = pagination.category === "push" ? pagination.push : pagination.pull
        Modal.confirm({
            title: msg,
            content: `Are you sure, you want to ${toLower(msg)} this door category?`,
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                Dispatched(doorCategoryEnableDisableAction([data?._id, { ...selectedTab, category: pagination.category }]))
            },
            onCancel() {
            },
            className: "new-button"
        });
    };

    const activeDecativeModel = (id, deactivate) => {
        const msg = deactivate ? appconstant.deactivate : appconstant.activate
        const selectedTab = pagination.category === "push" ? pagination.push : pagination.pull
        Modal.confirm({
            title: msg,
            content: functionValidation.areYouSure(msg.toLowerCase(), "door hinge"),
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            onOk() {
                Dispatched(doorHingesActiveDeactiveAction([id, { ...selectedTab, category: pagination.category }]))
            },
            onCancel() {

            },
            className: "new-button"
        });
    };
    const onChange = (key) => {
        tabNavigate = key
        const selectedTab = key === "push" ? pagination.push : pagination.pull
        Dispatched(doorCategoryAndHingesListAction({ category: key, ...selectedTab }))
        setPagination(state => ({ ...state, category: key }))
    };

    const pushTableChange = (e, _, data) => {
        Dispatched(doorCategoryAndHingesListAction({
            sortBy: data?.order ? data?.field : "",
            order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
            offset: (e.current - 1) * 10,
            category: pagination.category
        }))
        setPagination(state => ({
            ...state, push: {
                sortBy: data?.order ? data?.field : "",
                order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
                offset: (e.current - 1) * 10
            }
        }))
    }
    const pullTableChange = (e, _, data) => {
        Dispatched(doorCategoryAndHingesListAction({
            sortBy: data?.order ? data?.field : "",
            order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
            offset: (e.current - 1) * 10,
            category: pagination.category
        }))
        setPagination(state => ({
            ...state, pull: {
                sortBy: data?.order ? data?.field : "",
                order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
                offset: (e.current - 1) * 10
            }
        }))
    }

    const columns = [{
        title: 'Sr. No.',
        dataIndex: 'srno',
        key: 'srno',
        sorter: false,
        render: (value, item, index) => (index + 1)
    },
    {
        title: ' Hinges Type',
        dataIndex: 'type',
        key: 'type',
        sorter: true,
        render: (e) => FirstLetterUpperCase(e)
    },
    {
        title: 'Action',
        key: 'Posted',
        render: (e, { _id }) => {
            return (
                <div>{
                    data?.doorCategory?.isEnabled ?
                        <button type="submit" onClick={() => activeDecativeModel(_id, e.isActivated)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button> :
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
        title: ' Hinges Type',
        dataIndex: 'type',
        key: 'type',
        sorter: true,
        render: (e) => FirstLetterUpperCase(e)
    },
    {
        title: 'Action',
        key: 'Posted',
        render: (e, { _id }) => {
            return (
                <div>{
                    data?.doorCategory?.isEnabled ?
                        <button type="submit" onClick={() => activeDecativeModel(_id, e.isActivated)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button> :
                        <div className="disabledEditButton" type="submit" >{e.isActivated ? appconstant.deactivate : appconstant.activate}</div>
                }
                </div>
            )
        }
    },
    ];

    useEffect(() => {
        Dispatched(doorCategoryAndHingesListAction({ ...pagination.push, category: tabNavigate }))
    }, [])

    return (
        <div>
            <BreadcrumbFn
                path={["productManagement", "config"]}
                pathName={[
                    <FontAwesomeIcon icon={faHome} />,
                    appconstant.ConfigurationManagement,
                    appconstant.doorCategoryAndHinges,
                ]}
            />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="content-e">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
                        <h6 className="text-white text-capitalize ps-3 " style={{ padding: 1, }}>{appconstant.doorCategoryAndHinges}</h6>
                    </div>
                    <Tabs defaultActiveKey="1" onChange={onChange} activeKey={tabNavigate}>
                        <TabPane tab="Door Push " key="push">
                            <div className='main-ong-div'>
                                <div className='ong-event'>
                                    <div className='dor-alm' >
                                        <label>{appconstant.doorCategory}</label>
                                    </div>
                                    <div>
                                        <button className='ant-button2' type="submit" onClick={disableCategory} >{data?.doorCategory?.isEnabled ? appconstant.disable : appconstant.enable}</button>
                                    </div>
                                </div>
                                <div className="wrapper_line view_modules view">
                                    <div>
                                        <p>Push</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='panels-outlet'>Door Hinges</h3>
                                </div>
                                <Table pagination={false} onChange={pushTableChange} dataSource={data?.doorHinges} columns={columns} showSorterTooltip={false} />
                            </div>
                        </TabPane>
                        <TabPane tab="Door Pull" key="pull">
                            <div className='main-ong-div'>
                                <div className='ong-event'>
                                    <div className='dor-alm' >
                                        <label>{appconstant.doorCategory}</label>
                                    </div>
                                    <div>
                                        <button className='ant-button2' type="submit" onClick={disableCategory} >{data?.doorCategory?.isEnabled ? appconstant.disable : appconstant.enable}</button>
                                    </div>
                                </div>
                                <div className="wrapper_line view_modules view">
                                    <div>
                                        <p>Pull</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='panels-outlet'>Door Hinges</h3>
                                </div>
                                <Table pagination={false} onChange={pullTableChange} dataSource={data?.doorHinges} columns={columns2} showSorterTooltip={false} />
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default DoorCategoryAndHinges