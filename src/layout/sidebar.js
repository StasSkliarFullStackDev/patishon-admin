import { Button, Tooltip } from 'antd';
import React from "react";
import { Layout, Menu } from 'antd';
import { useLocation } from "react-router"
import {

  Link,
  useNavigate
} from "react-router-dom";
import images from "../themes/appImage";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {HomeOutlined, LayoutOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';

const { Sider } = Layout;
const Sidebar = (props) => {
  let navigate = useNavigate();
  let location = useLocation();

  const text = <span>Product Management</span>;
  const text1 = <span>Configuration Management</span>;
  const text11 = <span>Order Management</span>;
  const text2 = <span>Tolerance Management</span>;
  const onMenuClick = (e) => {
    if (e.key === '/logout') logout();

    navigate(e.key)
    return window.innerWidth < 767 ? props.handlewClick() : ''
  };


  let activeKey = ""
  switch (location.pathname) {
    case "/productManagement":
      activeKey = "/productManagement"
      break;
    case "/productDetails":
      activeKey = "/productManagement"
      break;
    case "/editProductDetails":
      activeKey = "/productManagement"
      break;
    case "/orderManagement":
      activeKey = "/orderManagement"
      break;
    case "/orderDetails":
      activeKey = "/orderManagement"
      break;
    case "/editFilmDetails":
      activeKey = "/config"
      break;
    case "/editDefaultRoomSize":
      activeKey = "/config"
      break;
    case "/editHandlePrice":
      activeKey = "/config"
      break;
    case "/defoultRoomSize":
      activeKey = "/config"
      break;
    case "/partition":
      activeKey = "/partition"
      break;
    case "/editPartition":
      activeKey = "/partition"
      break;
    case "/panels":
      activeKey = "/config"
      break;
    case "/addNewPanels":
      activeKey = "/config"
      break;
    case "/pannelDetails":
      activeKey = "/config"
      break;
    case "/editPanelDetails":
      activeKey = "/config"
      break;
    case "/frameAndColor":
      activeKey = "/config"
      break;
    case "/editSingleMetalGlazed":
      activeKey = "/config"
      break;
    case "/doorChannel":
      activeKey = "/config"
      break;
    case "/editSingleDoor":
      activeKey = "/config"
      break;
    case "/editDoubleDoor":
      activeKey = "/config"
      break;

    case "/doorGlass":
      activeKey = "/config"
      break;
    case "/editDoorGlass":
      activeKey = "/config"
      break;
    case "/doorCategoryAndHinges":
      activeKey = "/config"
      break;
    case "/handles":
      activeKey = "/config"
      break;
    case "/film":
      activeKey = "/config"
      break;
    case "/config":
      activeKey = "/config"
      break;

    case "/toleranceManagement":
      activeKey = "/toleranceManagement"
      break;

    default:
      activeKey = "/productManagement"
  }


  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const logout = () => {
    const deleteCookie = (name) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    deleteCookie('isAuthenticated');

    setTimeout(() => {
      navigate('/login')
    }, 10)
  };

  const items = [
    getItem('Product Management', '/productManagement', <Tooltip placement='right' title={props.isVisible ? text : ''}><HomeOutlined /></Tooltip>),
    getItem('Configuration Management', '/config', <Tooltip placement='right' title={props.isVisible ? text1 : ''}><LayoutOutlined /></Tooltip>),
    getItem('Tolerance Management', '/toleranceManagement', <Tooltip placement='right' title={props.isVisible ? text2 : ''}><SettingOutlined /></Tooltip>),
    getItem('Order Management', '/orderManagement', <Tooltip placement='right' title={props.isVisible ? text11 : ''}><ShoppingOutlined /></Tooltip>),
    getItem(
        'Logout',
        '/logout',
        <LogoutOutlined onClick={() => logout()} />
    )
  ];

  return (
    <Sider
      className={props.isVisible ? 'sider_left new closedd' : 'sider_left new'}
      collapsedWidth="0"
      width={props.isVisible ? '260' : '260'}
      height={"100vh"}
      onBreakpoint={broken => {
      }}
      onCollapse={(collapsed, type) => {
      }}
    >
      <div className="logo">
        <div className="logo_container">
          <Link to="/productManagement" style={{ textAlign: 'left' }}>
            <img alt='' src={images.logo1} />
          </Link>
          <FontAwesomeIcon onClick={props.handlewClick} className="icon-angle-left side-icons" icon={faBars} />
          <FontAwesomeIcon onClick={props.handlewClick} className="eclipse-icon" icon={faEllipsisV} />
        </div>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[activeKey]}
        selectedKeys={[activeKey]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={onMenuClick}
      />
    </Sider>

  )
}
export default Sidebar;