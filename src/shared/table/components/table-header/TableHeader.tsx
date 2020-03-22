
import * as React from 'react';
import "./TableHeader.scss";

import { TableBodyProps } from "./types";
import TH from "./components/table-th/TableTh.components";
import { ColumnInstance } from 'react-table';


const TableBody: React.SFC<TableBodyProps> = (props) => {
    return (
        <thead className="ui-table--header">
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