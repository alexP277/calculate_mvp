import React from 'react';
import {Button, Card, Form, Select} from 'antd';

const constructionOptions  = [
    { label: 'Колонна', value: 'Колонна' },
    { label: 'Балка решетчатая', value: 'Балка решетчатая' },
    { label: 'Балка колонная', value: 'Балка колонная' },
    { label: 'Опора', value: 'Опора' },
    { label: 'Ригель', value: 'Ригель' },
    { label: 'и ТД', value: 'и ТД' },
];

const massOptions = [
    { label: '100-300 кг', value: '100-300' },
    { label: '300-500 кг', value: '300-500' },
    { label: '500-1тн', value: '500-1000' },
    { label: 'и ТД', value: 'и ТД' },
];

const detailsOptions = [
    { label: '1-5', value: '1-5' },
    { label: '5-10', value: '5-10' },
    { label: 'и тд', value: 'и тд' },
];

const brigadaOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: 'ИТД', value: 'ИТД' },
];

const peopleOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: 'ИТД', value: 'ИТД' },
];

const MakeNewCalculation: React.FC = () => {
    const [form] = Form.useForm();

    const handleFormSubmit = (values: any) => {
        // Здесь можно выполнить необходимые операции с данными формы
        console.log(values);
    };

    return (
        <Card>
        <Form style={{width: '500px'}} form={form} onFinish={handleFormSubmit}>
            <Form.Item name="select1" label="Выбор вида конструкции">
                <Select options={constructionOptions} placeholder={"Вид конкструкции"}/>
            </Form.Item>

            <Form.Item name="select2" label="Тоннаж:">
                <Select options={massOptions} placeholder={"Выбор тоннажа"}/>
            </Form.Item>

            <Form.Item name="select3" label="Выбор кол-ва деталей">
                <Select options={detailsOptions} placeholder={"Кол-во деталей"}/>
            </Form.Item>

            <Form.Item name="select4" label="Выбор бригады">
                <Select options={brigadaOptions} placeholder={"Бригада"}/>
            </Form.Item>

            <Form.Item name="select5" label="Кол-во человек">
                <Select options={peopleOptions} placeholder={"Кол-во человек"}/>
            </Form.Item>

            <Form.Item>
                <Button type="default" htmlType="submit">Рассчитать</Button>
            </Form.Item>
        </Form>
        </Card>
    );
};

export default MakeNewCalculation;
