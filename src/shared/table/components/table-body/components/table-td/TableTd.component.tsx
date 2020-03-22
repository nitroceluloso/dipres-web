
import * as React from 'react';
import { Cell } from 'react-table';

export interface TableTdProps {
    cell: Cell
}

const TableTd: React.SFC<TableTdProps> = ({ cell }) => {
    return (
        <td className="ui-table__body-cell">
            { cell.render("Cell") }
        </td>
    );
}

export default TableTd;