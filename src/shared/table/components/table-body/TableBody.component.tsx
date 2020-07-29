
import * as React from 'react';

import { Row } from 'react-table';
import TableRow from "../table-row/TableRow.component";
import { TableBodyProps } from "./types";

const TableBody: React.SFC<TableBodyProps> = (props) => {
    const { data, prepareRow } = props;

    return (
        <tbody className="table__body">
            {
                data.map((row: Row, idx: number) => {
                    prepareRow(row);

                    return (
                        <TableRow key={idx} row={row} />
                    )
                })
            }
        </tbody>
    );
}

export default TableBody;