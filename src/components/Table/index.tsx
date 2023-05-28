import React, {FC} from 'react';
import './Table.css'
import FilerIcon from '../../shared/images/filter.svg'
import Checkbox from "../Checkbox";
interface Column {
    key: string;
    title: string;
}

interface TableProps {
    columns: Column[];
    data: Record<string, any>[];
}

const Table:FC<TableProps> = ({ columns, data }) => {
    return (
        <table>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={column.key}>
                        <div className="header_container">

                        {index < columns.length - 1 ? <> {column.title} <img src={FilerIcon} alt={'icon'}/></> : <><Checkbox/>  {column.title}</>}
                        </div>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((column, columnIndex) => (
                        <td key={column.key}>
                            {columnIndex === columns.length - 1 ? (
                                <Checkbox isChecked={row[column.key]}/>
                            ) : (
                                row[column.key]
                            )}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
