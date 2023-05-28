import React, {useState} from 'react';
import {Button, Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import {CalculatorOutlined, UserOutlined} from "@ant-design/icons";
import './style.css';
import LoginModal from "../LoginModal";

const {Header} = Layout;

const AppHeader = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleLogin = (values: any) => {
        // Здесь можно выполнить логику проверки авторизации
        console.log('Авторизация:', values);
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    return (
        <Header>
            <div className={"header-content"}>
                <Link to={'/'}>
                    <div className="logo">
                        <Button icon={<CalculatorOutlined/>}/>
                    </div>
                </Link>
                <div className="menu-container">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/">Рассчёт</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/history">История</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="user-block">
                    <Button onClick={openModal} icon={<UserOutlined/>}/>
                </div>
                <LoginModal visible={modalVisible} onCancel={handleCancel} onLogin={handleLogin} />
            </div>
        </Header>
    );
};


export default AppHeader;
