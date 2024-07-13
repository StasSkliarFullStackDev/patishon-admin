

import React, { useEffect, useRef, useState } from "react";
import { Table, Modal } from 'antd';
import appconstant from "../../themes/appconstant";
import { Dispatched, FirstLetterUpperCase } from "../../utils/utils";
import { addFilmAction, deleteFilmAction, filmActivateDeactivateAction, filmDisableEnableAction, filmListAction, filmUpdateAction } from "../../Redux/Actions/ConfigManagement";
import { BreadcrumbFn } from "../../common";
import { useSelector } from "react-redux";
import { toaster } from "../../utils/Toaster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { functionValidation } from "../../utils/functionValidation";
import images from "../../themes/appImage"
import { Link } from "react-router-dom";


const Film = () => {
  const [pagination, setPagination] = React.useState({ offset: 0, sortBy: "", order: "" })
  const data = useSelector(state => state?.configReducer?.filmList)
  const [image, setImage] = useState()
  const refs = useRef()
  const imageSet = e => {
    if (
      e.target.files[0]?.type === appconstant.extentions.jpeg ||
      e.target.files[0]?.type === appconstant.extentions.jpg ||
      e.target.files[0]?.type === appconstant.extentions.png
    ) {
      if (e.target.files[0]?.size < appconstant.imageSize) {
        setImage(e.target.files[0])
      } else {
        toaster(appconstant.fileSize)
      }
    } else {
      toaster(appconstant.fileExtention)
    }
  }

  const editColor = (id) => {
    Modal.confirm({
      title: "Choose Color",
      content: (<div><img
        alt=""
        type='image'
        src={image
          ? URL.createObjectURL(image)
          : data?.image
            ? appconstant.ImageUrl + data?.image
            : images.usermessage}
      />
        {/* <div className='datacenter-icon'> */}
        <img
          alt=""
          type='image'
          src={images.pluss}
          onClick={() => refs.current.click()}
          className="modalPlus" />
        <input
          type='file'
          style={{ display: 'none' }}
          ref={refs}
          onChange={imageSet}
          accept={Object.values(appconstant.extentions)} />
      </div>)
      ,
      okText: 'Update',
      centered: true,
      closable: false,
      cancelText: 'Cancel',
      onOk() {
        let body = new FormData()
        body.append("image", image)
        body.append("filmId", id)
        image ? Dispatched(filmUpdateAction([body, pagination])) : toaster("Please uplaod a film.", "error")
        setImage(null)
      },
      onCancel() {
      },
      className: "addColor-Modal"
    });
  };

  // const addColor = () => {
  //     Modal.confirm({
  //         title: "Choose Color",
  //         content: <input id="input-colorPicker" ref={refs} className="input-colorPicker" type={"color"} onChange={e => colorcode = e.target.value} />,
  //         okText: 'Add',
  //         centered: true,
  //         closable: false,
  //         cancelText: 'Cancel',
  //         onOk() {
  //             if (colorcode) {
  //                 Dispatched(addFilmAction([{name: colorcode }, {offset: 0 }]))
  //                 setPagination({offset: 0 })
  //                 colorcode = ""
  //             } else {
  //                 toaster("Please select a color.", "error")
  //             }
  //         },
  //         onCancel() {
  //         },
  //         className: "addColor-Modal"
  //     });
  // };

  const disableAll = () => {
    const msg = data?.isEnabled ? appconstant.disable : appconstant.enable
    Modal.confirm({
      title: msg ,
      content: `Are you sure, you want to ${msg.toLowerCase()} films ?`,
      okText: 'Yes',
      centered: true,
      cancelText: 'No',
      onOk() {
        Dispatched(filmDisableEnableAction([, pagination]))
      },
      onCancel() {
      },
      className: "new-button"
    });
  };
  const disableModel = (id, record) => {
    const msg = record ? appconstant.deactivate : appconstant.activate
    Modal.confirm({
      title: msg,
      content: functionValidation.areYouSure(msg.toLowerCase(), appconstant.film.toLowerCase()),
      okText: "Yes",
      centered: true,
      cancelText: 'No',
      onOk() {
        Dispatched(filmActivateDeactivateAction([`?id=${id}`, pagination]))
      },
      onCancel() {

      },
      className: "new-button"
    });
  };

  const tableChange = (e, _, data) => {
    Dispatched(filmListAction({
      offset: (e.current - 1) * 10,
      sortBy: data.order ? data.field : "",
      order: data.order === "ascend" ? 1 : data.order === "descend" ? -1 : "",
    }))
    setPagination(
      {
        offset: (e.current - 1) * 10, sortBy: data.order ? data.field : "",
        order: data.order === "ascend" ? 1 : data.order === "descend" ? -1 : "",
      }
    )
  }
  const columns = [{
    title: 'Sr. No.',
    dataIndex: 'srno',
    key: 'srno',
    sorter: false,
    render: (value, item, index) => (index + 1) + pagination.offset
  },
  {
    title: 'Film Image',
    dataIndex: 'image',
    key: 'name',
    sorter: false,
    render: (e) => <img src={appconstant.ImageUrl + e} alt="film_texture" />
  },
  {
    title: ' Film Name ',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    render: (e) => FirstLetterUpperCase(e)
  },
  {
    title: 'Price (£)',
    dataIndex: 'price',
    key: 'events',
    sorter: true,
  },
  {
    title: 'Action',
    key: 'Posted',
    render: (e, { _id }, index) => {
      return (
        <div>
          <Link to="/editFilmDetails">
            <button onClick={() => localStorage.setItem("editFilm", JSON.stringify(e))} type="submit">{appconstant.edit}</button>
          </Link>
          {
            data?.isEnabled ?
              <button type="submit" onClick={() => disableModel(_id, e?.isActivated)} >{e.isActivated ? appconstant.deactivate : appconstant.activate}</button> :
              <div className="disabledEditButton" type="submit" >{e.isActivated ? appconstant.deactivate : appconstant.activate}</div>
          }
        </div>
      )
    }
  },
  ];

  useEffect(() => {
    Dispatched(filmListAction(pagination))
  }, [])

  return (
    <div>
      <BreadcrumbFn
        path={["productManagement", "config"]}
        pathName={[
          <FontAwesomeIcon icon={faHome} />,
          appconstant.ConfigurationManagement,
          appconstant.film,
        ]}
      />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div className="content-e">
          <div className="ong-event">
            <h6 className="text-white text-capitalize ps-3 panels-outlet" >{appconstant.film}</h6>
            <div>
              <button className="button-list" onClick={disableAll}>{data?.isEnabled ? appconstant.disable : appconstant.enable}</button>
            </div>
          </div>
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
            <div>
              {/* <button type="submit" onClick={addColor} className="button-list">{appconstant.addnewfilm}</button> */}
            </div>
          </div>
          <Table pagination={{ total: data?.pagination?.totalCount, current: data?.pagination?.currentPage, }} dataSource={data?.data} columns={columns} onChange={tableChange} showSorterTooltip={false} />
        </div>
      </div>
    </div>
  )
}
export default Film