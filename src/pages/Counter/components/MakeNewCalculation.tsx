import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Select} from 'antd';
import useLocalStorage from "../../../shared/useLocalStorage";

interface DtoType {
    id: string;
    name: string;
    constructionType: string;
    mass: string;
    team: string;
    peopleCount: string;
    totalPrice: string;
    calculationDate: string;
}


const constructionOptions = [
    // {label: 'Колонна', value: 'Колонна'},
    // {label: 'Балка решетчатая', value: 'Балка решетчатая'},
    // {label: 'Балка колонная', value: 'Балка колонная'},
    // {label: 'Опора', value: 'Опора'},
    {label: 'Ригель', value: 'Ригель'},
    //{label: 'и ТД', value: 'и ТД'},
];

const massOptions = [
    {label: '0,15 т', value: '0,15'},
    {label: '0,2 т', value: '0,2'},
    {label: '0,3 т', value: '0,3'},
    {label: '0,4 т', value: '0,4'},
    {label: '0,5 т', value: '0,5'},
    {label: '0,75 т', value: '0,75'},
    {label: '1 т', value: '1'},
];

const detailsOptions = [
    {label: 'до 5', value: '5'},
    {label: 'до 7', value: '7'},
    {label: 'до 10', value: '10'},
    {label: 'до 15', value: '15'},
    {label: 'до 20', value: '20'},
    {label: 'до 25', value: '25'},
    {label: 'до 30', value: '30'},
];

const brigadaOptions = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
];

const peopleOptions = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
];

const MakeNewCalculation: React.FC = () => {
    const [form] = Form.useForm();

    const [tableData, setTableData] = useLocalStorage('tableData', '');

    const [data, setData] = useState<DtoType[]>(()=> tableData);


    const [dataValues, setDataValues] = useState<any>();

    const [state, setState] = useState<number>(0);

    const [fileName, _setData] = useLocalStorage('fileName', '');

    const addNewElement = (dto: DtoType): void => {
        setData([...data, dto]);
    };

    useEffect(()=> setTableData(data), [data])

    useEffect(() => {

        if (!!dataValues) {
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear().toString().slice(-2);
            const formattedDate = `${day}-${month}-${year}`;
            const randomNumber = Math.floor(Math.random() * 10001);

            addNewElement({
                id: String(randomNumber),
                mass: dataValues.mass,
                constructionType: dataValues.construction_type,
                calculationDate: formattedDate,
                totalPrice: String(state),
                peopleCount: dataValues.people,
                team: dataValues.brigada,
                name: fileName,
            })

        }


    }, [state, dataValues]);



    const handleFormSubmit = (values: any) => {
        // 5 details
        if (values?.mass === '0,15' && values?.details === '5' && values.construction_type === 'Ригель') {
            setState(2.6);
        }
        if (values?.mass === '0,2' && values?.details === '5' && values.construction_type === 'Ригель') {
            setState(3);
        }
        if (values?.mass === '0,3' && values?.details === '5' && values.construction_type === 'Ригель') {
            setState(3.7);
        }
        if (values?.mass === '0,4' && values?.details === '5' && values.construction_type === 'Ригель') {
            setState(4.5);
        }
        if (values?.mass === '0,5' && values?.details === '5' && values.construction_type === 'Ригель') {
            setState(5);
        }
        if (values?.mass === '0,75' && values?.details === '5' && values.construction_type === 'Ригель') {
            setState(7.3);
        }
        if (values?.mass === '1' && values?.details === '5' && values.construction_type === 'Ригель') {
            setState(9.8);
        }
        // 7 details
        if (values?.mass === '0,15' && values?.details === '7' && values.construction_type === 'Ригель') {
            setState(2.2);
        }
        if (values?.mass === '0,2' && values?.details === '7' && values.construction_type === 'Ригель') {
            setState(2.6);
        }
        if (values?.mass === '0,3' && values?.details === '7' && values.construction_type === 'Ригель') {
            setState(3.1);
        }
        if (values?.mass === '0,4' && values?.details === '7' && values.construction_type === 'Ригель') {
            setState(4);
        }
        if (values?.mass === '0,5' && values?.details === '7' && values.construction_type === 'Ригель') {
            setState(4.5);
        }
        if (values?.mass === '0,75' && values?.details === '7' && values.construction_type === 'Ригель') {
            setState(6.2);
        }
        if (values?.mass === '1' && values?.details === '7' && values.construction_type === 'Ригель') {
            setState(8.8);
        }

        // 10 details
        if (values?.mass === '0,15' && values?.details === '10' && values.construction_type === 'Ригель') {
            setState(1.6);
        }
        if (values?.mass === '0,2' && values?.details === '10' && values.construction_type === 'Ригель') {
            setState(1.8);
        }
        if (values?.mass === '0,3' && values?.details === '10' && values.construction_type === 'Ригель') {
            setState(2.4);
        }
        if (values?.mass === '0,4' && values?.details === '10' && values.construction_type === 'Ригель') {
            setState(3.2);
        }
        if (values?.mass === '0,5' && values?.details === '10' && values.construction_type === 'Ригель') {
            setState(3.5);
        }
        if (values?.mass === '0,75' && values?.details === '10' && values.construction_type === 'Ригель') {
            setState(4.7);
        }
        if (values?.mass === '1' && values?.details === '10' && values.construction_type === 'Ригель') {
            setState(6.7);
        }

        // 15 details
        if (values?.mass === '0,15' && values?.details === '15' && values.construction_type === 'Ригель') {
            setState(1.1);
        }
        if (values?.mass === '0,2' && values?.details === '15' && values.construction_type === 'Ригель') {
            setState(1.3);
        }
        if (values?.mass === '0,3' && values?.details === '15' && values.construction_type === 'Ригель') {
            setState(1.7);
        }
        if (values?.mass === '0,4' && values?.details === '15' && values.construction_type === 'Ригель') {
            setState(2.4);
        }
        if (values?.mass === '0,5' && values?.details === '15' && values.construction_type === 'Ригель') {
            setState(2.7);
        }
        if (values?.mass === '0,75' && values?.details === '15' && values.construction_type === 'Ригель') {
            setState(3.8);
        }
        if (values?.mass === '1' && values?.details === '15' && values.construction_type === 'Ригель') {
            setState(5.4);
        }

        // 20 details
        if (values?.mass === '0,15' && values?.details === '20' && values.construction_type === 'Ригель') {
            setState(0.84);
        }
        if (values?.mass === '0,2' && values?.details === '20' && values.construction_type === 'Ригель') {
            setState(0.95);
        }
        if (values?.mass === '0,3' && values?.details === '20' && values.construction_type === 'Ригель') {
            setState(1.3);
        }
        if (values?.mass === '0,4' && values?.details === '20' && values.construction_type === 'Ригель') {
            setState(1.8);
        }
        if (values?.mass === '0,5' && values?.details === '20' && values.construction_type === 'Ригель') {
            setState(2.1);
        }
        if (values?.mass === '0,75' && values?.details === '20' && values.construction_type === 'Ригель') {
            setState(2.9);
        }
        if (values?.mass === '1' && values?.details === '20' && values.construction_type === 'Ригель') {
            setState(4.1);
        }

        // 25 details
        if (values?.mass === '0,15' && values?.details === '25' && values.construction_type === 'Ригель') {
            setState(0.64);
        }
        if (values?.mass === '0,2' && values?.details === '25' && values.construction_type === 'Ригель') {
            setState(0.76);
        }
        if (values?.mass === '0,3' && values?.details === '25' && values.construction_type === 'Ригель') {
            setState(1);
        }
        if (values?.mass === '0,4' && values?.details === '25' && values.construction_type === 'Ригель') {
            setState(1.5);
        }
        if (values?.mass === '0,5' && values?.details === '25' && values.construction_type === 'Ригель') {
            setState(1.7);
        }
        if (values?.mass === '0,75' && values?.details === '25' && values.construction_type === 'Ригель') {
            setState(2.4);
        }
        if (values?.mass === '1' && values?.details === '25' && values.construction_type === 'Ригель') {
            setState(3.3);
        }

        // 30 details
        if (values?.mass === '0,15' && values?.details === '30' && values.construction_type === 'Ригель') {
            setState(0.53);
        }
        if (values?.mass === '0,2' && values?.details === '30' && values.construction_type === 'Ригель') {
            setState(0.62);
        }
        if (values?.mass === '0,3' && values?.details === '30' && values.construction_type === 'Ригель') {
            setState(0.87);
        }
        if (values?.mass === '0,4' && values?.details === '30' && values.construction_type === 'Ригель') {
            setState(1.2);
        }
        if (values?.mass === '0,5' && values?.details === '30' && values.construction_type === 'Ригель') {
            setState(1.5);
        }
        if (values?.mass === '0,75' && values?.details === '30' && values.construction_type === 'Ригель') {
            setState(2);
        }
        if (values?.mass === '1' && values?.details === '30' && values.construction_type === 'Ригель') {
            setState(2.8);
        }
        setDataValues(values);
    };
    return (
        <Card>
            <Form style={{width: '500px'}} form={form} onFinish={handleFormSubmit}>
                <Form.Item name="construction_type" label="Выбор вида конструкции">
                    <Select options={constructionOptions} placeholder={"Вид конкструкции"}/>
                </Form.Item>

                <Form.Item name="mass" label="Тоннаж:">
                    <Select options={massOptions} placeholder={"Выбор тоннажа"}/>
                </Form.Item>

                <Form.Item name="details" label="Выбор кол-ва деталей">
                    <Select options={detailsOptions} placeholder={"Кол-во деталей"}/>
                </Form.Item>

                <Form.Item name="brigada" label="Выбор бригады">
                    <Select options={brigadaOptions} placeholder={"Бригада"}/>
                </Form.Item>

                <Form.Item name="people" label="Кол-во человек">
                    <Select options={peopleOptions} placeholder={"Кол-во человек"}/>
                </Form.Item>

                <Form.Item>
                    <Button type="default" htmlType="submit">Рассчитать</Button>
                </Form.Item>
            </Form>
            <div style={{color: 'green'}}>Итого: {state}</div>
        </Card>
    );
};

export default MakeNewCalculation;
