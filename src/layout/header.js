import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined,NotificationOutlined  } from '@ant-design/icons';
import { FontAwesomeIcon, fadashcube } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faNewspaper, faBell, faShoppingCart, faUsers,faBars } from "@fortawesome/free-solid-svg-icons";
import {  Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;



const HeaderAdmin  = (props) =>{
    return(
       <div>
            <Header className="site-layout-sub-header-background"  style={{ padding: 0 }}>
                <div className="iocns">
             <FontAwesomeIcon icon={faBars} className="lite-text trigger" onClick={props.handlewClick} />
            </div>
            
            
            </Header>
        </div>

    )
}
export default HeaderAdmin;