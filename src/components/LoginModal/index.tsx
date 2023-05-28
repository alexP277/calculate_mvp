import React, {FC} from 'react';
import { Modal, Form, Input, Button } from 'antd';

interface LoginModalProps {
    visible: boolean;
    onCancel: () => void;
    onLogin: (value: any) => void;
}
const LoginModal: FC<LoginModalProps> = ({ visible, onCancel, onLogin }) => {
    const handleLogin = (values: any) => {
        // Здесь можно выполнить логику проверки авторизации
        console.log('Авторизация:', values);
        onLogin(values);
    };

    return (
        <Modal
            centered
            title="Авторизация"
            open={visible}
            onCancel={onCancel}
            footer={null}
        >
            <Form onFinish={handleLogin}>
                <Form.Item
                    name="username"
                    rules={[
                        { required: true, message: 'Пожалуйста, введите имя пользователя' },
                    ]}
                >
                    <Input placeholder="Имя пользователя" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
                >
                    <Input.Password placeholder="Пароль" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default LoginModal;
