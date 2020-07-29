
import * as React from 'react';

import { TableBodyProps } from "./types";
import TH from "../table-th/TableTh.components";
import { ColumnInstance } from 'react-table';


const TableBody: React.SFC<TableBodyProps> = (props) => {
    return (
        <thead className="table__header">
            <tr>
            {
                props.columns.map((el: ColumnInstance, idx: number) => {
                    return (
                        <TH key={idx} column={el} />
                    )
                })
            }
            </tr>
        </thead>
    );
}

export default TableBody;