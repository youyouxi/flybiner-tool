import React from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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
    getItem('工作台', 'grp', null, [getItem('', '13', <SettingOutlined />), getItem('', '14',  <AppstoreOutlined />)], 'group'),
];
const IndexPage = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
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
    );
};

export default IndexPage;