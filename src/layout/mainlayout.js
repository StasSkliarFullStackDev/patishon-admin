import React, { useState } from "react"
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router';

import HeaderAdmin from "../layout/header";
import Sidebar from "../layout/sidebar";
const { Content, } = Layout;


const MainLayout = (props) => {
    const [isVisible, setVisible] = useState(false)
    const handlewClick = () => {
        setVisible(!isVisible)
    }
    return (
        <Layout className={isVisible ? 'closebox' : 'open'}>
            <Sidebar isVisible={isVisible} handlewClick={handlewClick} />
            <Layout className={isVisible ? 'new_layout data' : 'new_layout'}>
                <HeaderAdmin handlewClick={handlewClick} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
export default MainLayout