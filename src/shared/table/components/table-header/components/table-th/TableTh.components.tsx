
import * as React from 'react';
import { TableThProps } from "./type";

const TableTh: React.SFC<TableThProps> = ({ column }) => {
    return (
        <th className="ui-table--header-cell" {...column.getHeaderProps((column as any).getSortByToggleProps())}>
            {column.render("Header")}
        </th>
    );
}

export default TableTh;