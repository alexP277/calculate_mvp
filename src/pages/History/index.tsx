import React from 'react';
import './../../App.css';
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {DtoType} from "../../shared/store";
import useLocalStorage from "../../shared/useLocalStorage";

const columns:ColumnsType<DtoType> = [
    {
        title: '№ - Нумерация',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Название чертежа(всегда одноименное с названием файла ПДФ)',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Вид конструкции',
        dataIndex: 'constructionType',
        key: 'constructionType',
    },
    {
        title: 'Тоннаж',
        dataIndex: 'mass',
        key: 'mass',
    },
    {
        title: 'Бригада №',
        dataIndex: 'team',
        key: 'team',
    },
    {
        title: 'Кол-во человек',
        dataIndex: 'peopleCount',
        key: 'peopleCount',
    },
    {
        title: 'Итоговое значение',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Дата когда отдано в работу',
        dataIndex: 'calculationDate',
        key: 'calculationDate',
    },
];

const History = () => {

    const [tableData, _setTableData] = useLocalStorage('tableData', '');

    return (
        <div className="container">
            <Table dataSource={tableData} columns={columns} />;
        </div>
    );
};

export default History;
