import React, { useState, useLayoutEffect, useRef } from "react"
import {
  Link
} from "react-router-dom";
import { Table, Modal } from 'antd';
import appconstant from "../../themes/appconstant";
import { useSelector } from "react-redux";
import { deleteFrameVariantAction, frameAddAction, frameTypeActiveDeactiveAction, frameTypeListAction, frameVariantActiveDeactiveAction, frameVariantDefaultAction, frameVariantListAction } from "../../Redux/Actions/ConfigManagement";
import { toaster } from "../../utils/Toaster";
import { Dispatched } from "../../utils/utils";
import { BreadcrumbFn } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { functionValidation } from "../../utils/functionValidation";

let colorcode = "";
let variantData = {
  search: "",
  sortBy: "",
  order: "",
  offset: 0
}

const FrameAndColor = () => {

  const refs = useRef()
  const [typeSearch, setTypeSearch] = useState("")
  const frameType = useSelector((data) => data?.configReducer?.frameType)
  const frameVariant = useSelector((data) => data?.configReducer?.frameVariant)
  const [typePagination, setTypePagination] = useState({ search: "", sortBy: "", order: "", offset: 0 })
  const [variantPagination, setVariantPagination] = useState({ search: "", sortBy: "", order: "", offset: 0 })

  const disableModel = (record, id) => {
    const msg = record.isActivated ? appconstant.deactivate : appconstant.activate
    Modal.confirm({
      title: msg,
      content: functionValidation.areYouSure(msg.toLowerCase(), appconstant.frameType.toLowerCase()),
      okText: 'Yes',
      centered: true,
      cancelText: 'No',
      onOk() {
        Dispatched(frameTypeActiveDeactiveAction([id, { ...variantPagination, search: typeSearch, }]))
      },
      onCancel() {

      },
      className: "new-button"
    });
  };
  const deleteModel = (record, id) => {
    const msg = record ? appconstant.deactivate : appconstant.activate
    Modal.confirm({
      title: msg,
      content: functionValidation.areYouSure(msg.toLowerCase(), appconstant.frameVariant.toLowerCase()),
      okText: 'Yes',
      centered: true,
      cancelText: 'No',
      onOk() {
        Dispatched(frameVariantActiveDeactiveAction([id, { ...variantPagination }]))
      },
      onCancel() {

      },
      className: "new-button"
    });
  };
  const makeDefalutModel = (id) => {
    Modal.confirm({
      title: "Mark as default",
      content: functionValidation.areYouSure("mark", "frame variant as default"),
      okText: 'Yes',
      centered: true,
      cancelText: 'No',
      onOk() {
        Dispatched(frameVariantDefaultAction([id, variantData]))
      },
      onCancel() {
      },
      className: "new-button"
    });
  };
  const addColor = () => {
    Modal.confirm({
      title: "Choose Color",
      content: <input id="input-colorPicker" ref={refs} className="input-colorPicker" type={"color"} onChange={e => colorcode = e.target.value} />,
      okText: 'Add',
      centered: true,
      closable: false,
      cancelText: 'Cancel',
      onOk() {
        if (colorcode) {
          Dispatched(frameAddAction([{ type: colorcode }]))
          setVariantPagination((state) => ({ ...state, offset: 0 }))
          colorcode = ""
        } else {
          toaster("Please select color.", { id: 1 })
        }
      },
      onCancel() {
      },
      className: "addColor-Modal"
    });
  };

  const deleteFrameVariant = (id) => {
    Modal.confirm({
      title: "Delete",
      content: functionValidation.areYouSure(appconstant.delete.toLowerCase(), appconstant.frameVariant.toLowerCase()),
      okText: 'Yes',
      centered: true,
      cancelText: 'No',
      onOk() {
        Dispatched(deleteFrameVariantAction([id, { ...variantPagination, offset: frameVariant?.data.length == 1 ? frameVariant?.pagination.prevPage : variantPagination.offset }]))
        setVariantPagination((state) => ({ ...state, offset: frameVariant?.data.length == 1 ? frameVariant?.pagination.prevPage : variantPagination.offset }))
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
    render: (value, item, index) => (index + 1) + typePagination.offset
  },
  {
    title: 'Frame Type ',
    dataIndex: 'type',
    sorter: true,
  },
  {
    title: 'Price Per mm (£)',
    dataIndex: 'price',
    sorter: true,
  },
  {
    title: 'Action',
    render: (e, { _id }) => {
      return (
        <div>
          <Link to="/editSingleMetalGlazed">
            <button onClick={() => edit(e)} type="submit" >{appconstant.edit}</button>
          </Link>
          <button type="submit" onClick={() => disableModel(e, _id)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button>
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
    render: (value, item, index) => (index + 1) + variantPagination.offset
  },
  {
    title: 'Variant Types',
    dataIndex: 'type',
    key: 'type',
    sorter: false,
    render: (e) => <div className="colorVariant-column" style={{ background: e }} />
  },
  {
    title: 'Action',
    render: (e, { _id }) => {
      return (
        <div>
          <button type="submit" onClick={() => deleteModel(e.isActivated, _id)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button>
          {e.isDefault ?
            <div className="disabledButton" type="submit" disabled={e.isDefault} >{appconstant.MarkAsDefault}</div> :
            <button className="ant-table-btn" onClick={() => makeDefalutModel(_id)} type="submit">{appconstant.MarkAsDefault}</button>
          }
          {e.isDefault ?
            <div className="disabledButton" disabled={e.isDefault} type="submit">{appconstant.delete}</div> :
            <button className="ant-table-btn" onClick={() => deleteFrameVariant(_id)} type="submit">{appconstant.delete}</button>
          }
        </div>
      )
    }
  },
  ];

  const typeChange = (e, _, data) => {
    Dispatched(frameTypeListAction({
      "search": typeSearch,
      "sortBy": data?.order ? data?.field : "",
      "order": data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "",
      "offset": (e.current - 1) * 10
    }))
    setTypePagination((state) => ({
      offset: (e.current - 1) * 10, sortBy: data?.order ? data?.field : "",
      order: data?.order === "ascend" ? 1 : data?.order === "descend" ? -1 : "", ...state
    }))
  }

  const variantChange = (e, _, data) => {
    Dispatched(frameVariantListAction({
      "sortBy": "",
      "order": "",
      "offset": (e.current - 1) * 10
    }))
    variantData = { ...variantData, offset: (e.current - 1) * 10 }
    setVariantPagination((state) => ({ ...state, offset: (e.current - 1) * 10 }))
  }

  const edit = (e) => {
    localStorage.setItem("editFrame", JSON.stringify({ id: e._id, price: e.price, type: e.type }))
  }
  useLayoutEffect(() => {
    const id = setTimeout(() => {
      Dispatched(frameTypeListAction({ ...typePagination, search: typeSearch }))
    }, 500)
    return () => { clearTimeout(id) }
  }, [typeSearch])

  useLayoutEffect(() => {
    Dispatched(frameVariantListAction({
      "sortBy": "",
      "order": "",
      "offset": 0
    }))
  }, [])

  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.frameAndColor,
        ]}
      />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
            <h6 className="text-white text-capitalize ps-3" >{appconstant.frameAndColor}</h6>
            <input type="text" className="iocn-search  search-bar" placeholder="Search" value={typeSearch} onChange={(e) => setTypeSearch(e.target.value.trimStart())} />
          </div>
          <h6 className="text-white text-capitalize ps-3 panels-outlet" style={{ padding: 13, }}>{appconstant.frameType}</h6>
          <Table dataSource={frameType?.data} columns={columns} showSorterTooltip={false} onChange={typeChange}
            pagination={{ total: frameType?.pagination?.totalCount, current: frameType?.pagination?.current }} />
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line-variant">
            <h6 className="text-white text-capitalize ps-3 frame-variant">{appconstant.frameVariant}</h6>
            <div className="colorPicker-wrapper">
              <button onClick={addColor} className="add-Color">{appconstant.addColor}</button>
            </div>
          </div>
          <Table pagination={{ total: frameVariant?.pagination?.totalCount, current: frameVariant?.pagination?.currentPage, }} dataSource={frameVariant?.data} columns={columns2} onChange={variantChange} showSorterTooltip={false} />
        </div>
      </div>
    </div>

  )
}
export default FrameAndColor
