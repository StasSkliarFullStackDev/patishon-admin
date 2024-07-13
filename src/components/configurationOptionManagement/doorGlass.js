
import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import { Table, Modal } from 'antd';
import appconstant from "../../themes/appconstant";
import { useSelector } from "react-redux";
import { doorGlassActiveDeactiveAciton, doorGlassListAction } from "../../Redux/Actions/ConfigManagement";
import { debounce } from "lodash";
import Textfiled from "../../common/Textfield";
import { Dispatched, FirstLetterUpperCase } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { BreadcrumbFn } from "../../common";
import { functionValidation } from "../../utils/functionValidation";

const DoorGlass = () => {
  const dataList = useSelector((state) => state.configReducer.doorGlassList)
  const [details, setDetails] = useState({ sortBy: "", search: "", order: "", offset: 0 })
  const search = debounce((e) => {
    // if (e.target.value.charAt() == " ") {
    //   return
    // }
    Dispatched(doorGlassListAction({ ...details, search: e.target.value.trimStart() }))
    // setDetails((state) => ({ ...state, search: e.target.value }))
  }, 300)
  const onSearch = (e) => {
    setDetails((state) => ({ ...state, search: e.target.value.trimStart() }))
    search(e)
  }
  const onChange = (e, _, data) => {
    Dispatched(doorGlassListAction({
      "search": details.search,
      "sortBy": data.order ? data.field : "",
      "order": data.order === "ascend" ? 1 : data.order === "descend" ? -1 : "",
      "offset": (e.current - 1) * 10
    }))
    setDetails((state) => ({
      ...state, offset: (e.current - 1) * 10, sortBy: data.order ? data.field : "",
      order: data.order === "ascend" ? 1 : data.order === "descend" ? -1 : ""
    }))
  }
  const deactivateModal = (deactivate, id) => {

    const msg = deactivate ? appconstant.deactivate : appconstant.activate
    Modal.confirm({
      title: msg,
      content: functionValidation.areYouSure(msg.toLowerCase(), "size"),
      okText: 'Yes',
      centered: true,
      cancelText: 'No',
      onOk() {
        Dispatched(doorGlassActiveDeactiveAciton([id, details]))
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
    render: (value, item, index) => (index + 1) + details.offset
  },
  {
    title: 'Door Type',
    dataIndex: 'doorType',
    key: 'doorType',
    sorter: true,
    render: value => FirstLetterUpperCase(value)
  },
  {
    title: 'Glass Size (mm)  ',
    dataIndex: 'glassSize',
    key: 'size',
    sorter: true,
  },
  {
    title: ' Channel Size (mm) ',
    dataIndex: 'channelSize',
    key: 'channel',
    sorter: true,
  },
  {
    title: 'Price (£) ',
    dataIndex: 'doorGlassPrice',
    key: 'price',
    sorter: true,
  },
  {
    title: 'Action',
    dataIndex: 'isActivated',
    key: '_id',
    render: (e, data, index) => {
      return (
        <div>
          <Link to="/editDoorGlass">
            <button onClick={() => localStorage.setItem("editDoorGlass", JSON.stringify(data))} type="submit" >{appconstant.edit}</button>
          </Link>
          <button type="submit" onClick={() => deactivateModal(e, data?._id)} >{e ? appconstant.deactivate : appconstant.activate}</button>
        </div>
      )
    }
  },
  ];

  console.log("details", details)
  useEffect(() => {
    Dispatched(doorGlassListAction(details))
  }, [])

  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.doorGlass,
        ]}
      />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
            <h6 className="text-white text-capitalize ps-3">{appconstant.doorGlass}</h6>
            <Textfiled type="text" className="iocn-search  search-bar" value={details.search} placeholder="Search" onChange={onSearch} />
          </div>
          <Table pagination={{ total: dataList?.pagination?.totalCount, current: dataList?.pagination?.currentPage, }} dataSource={dataList?.data} onChange={onChange} columns={columns} showSorterTooltip={false} />
        </div>
      </div>
    </div>
  )
}
export default DoorGlass