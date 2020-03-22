
import * as React from 'react';

import { TableRowProps } from "./types";
import { Cell } from 'react-table';
import TD from "../table-td/TableTd.component";

const TableRow: React.SFC<TableRowProps> = ({ row }) => {
    return (
        <tr className="ui-table__body-row">
            {
                row.cells.map((cell: Cell, innerKey: number) => {
                    return ( <TD key={innerKey} cell={cell} /> )
                })
            }
        </tr>
    );
}

export default TableRow;