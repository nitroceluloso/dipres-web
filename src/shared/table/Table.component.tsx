
import * as React from 'react';
import "./Table.scss";

import { useTable, useSortBy } from 'react-table';
import { TableProps } from "./types";
import TableHeader from "./components/table-header/TableHeader.component";
import TableBody from "./components/table-body/TableBody.component";


const Table: React.SFC<TableProps<any>> = ({ config, data = [] }) => {
    const { headers, rows, prepareRow } = useTable({ columns: config, data }, useSortBy);

    return (
        <table className="table">
            <TableHeader
                columns={headers}
            />
            <TableBody
                data={rows}
                prepareRow={prepareRow}
            />
        </table>
    );
}

export default Table;