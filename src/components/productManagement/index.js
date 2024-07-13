import React, { useState, useEffect } from "react";
//antd
import { Table, Breadcrumb } from "antd";
//routers
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//themes
import appconstant from "../../themes/appconstant";
import { TabelHeader } from "./constant";
import {
  ProductActivateAction,
  ProductDuplicateAction,
  ProductManagementAction,
} from "../../Redux/Actions/ProductManagement";
import { PageOffSetReset } from "../../Redux/Actions/ProductManagement"
var instialData = {
  search: "",
  sortBy: "",
  order: 1,
  offset: 0,
  limit: 10,
};
const ProductManagement = () => {
  const [data, setData] = useState(instialData);
  const [searchInput, setSearchInput] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const Reducerdata = useSelector((state) => state.ProductManagementReducer);
  const onEditButtonClick = (data) => {
    data._id && navigate("/editProductDetails", { state: data });
  };
  const cb = (Data, name, isClick) => {
    Data?._id?.length > 0 &&
      dispatch(ProductActivateAction({ id: Data._id, data }));
    name == appconstant.DuplicateTittle &&
      Data &&
      dispatch(ProductDuplicateAction({ id: isClick._id, data }));
  };

  const onHandelChange = (pagination, filters, sorter) => {
    window.scrollTo(0, 0);
    let order = sorter.order == "ascend" ? 1 : -1;
    const newData = {
      sortBy: sorter.field,
      order: order,
      search: data.search,
      offset: (pagination.current - 1) * 10,
      limit: 10,
    };
    dispatch(ProductManagementAction(newData));
    setData(newData);
  };
  useEffect(() => {
    document.title = "Patishon";
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let newData = instialData;
    newData.search = searchInput;
    newData.offset =
      searchInput?.length == 0
        ? Reducerdata?.paginateData?.currentPage
          ? (Reducerdata?.paginateData?.currentPage - 1) * 10
          : 0
        : 0;
    dispatch(ProductManagementAction(data));
    setData(newData);
  }, [searchInput]);
  useEffect(() => {
    return () => {
      dispatch(PageOffSetReset())
    };
  }, []);

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="gofe"> {appconstant.productManagement}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="content-e">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 system-line">
            <h6 className="text-white text-capitalize ps-3">
              {appconstant.productManagement}
            </h6>
            <input
              type="text"
              className="search-bar iocn-search"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value.trimStart());
              }}
            />
          </div>
          <Table
            dataSource={Reducerdata?.data}
            columns={TabelHeader(
              (Data, name, isClick) => cb(Data, name, isClick),
              (data, name) => onEditButtonClick(data, name),
              Reducerdata?.paginateData?.currentPage
            )}
            onChange={onHandelChange}
            showSorterTooltip={false}
            pagination={{
              current: Reducerdata?.paginateData?.currentPage,
              total: Reducerdata?.paginateData?.totalCount,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductManagement;
