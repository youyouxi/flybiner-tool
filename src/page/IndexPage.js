import React, { useState } from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate, Routes, Route } from 'react-router-dom'
import DataBase from './database/DataBase';
import Redis from './redis/Redis';

const {Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('工作台', 'grp', null, [getItem('', '/DataBase', <SettingOutlined />), getItem('', '/Redis',  <AppstoreOutlined />)], 'group'),
];
const IndexPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate(e.key, { replace: true })
    }
    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={75}
                onCollapse={(value) => setCollapsed(value)}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 75,
                        height: '100vh'
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <Routes>
                            <Route exact path="/DataBase" element={<DataBase />} />
                            <Route exact path="/Redis" element={<Redis />} />
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default IndexPage;