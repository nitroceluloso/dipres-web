
import * as React from 'react';
import "./Table.component.scss";

import { useTable, useSortBy } from 'react-table';
import { TableProps } from "./types";
import TableHeader from "./components/table-header/TableHeader";
import TableBody from "./components/table-body/TableBody";


const Table: React.SFC<TableProps<any>> = ({ config, data = [] }) => {
    const { headers, rows, prepareRow } = useTable({ columns: config, data }, useSortBy);

    return (
        <table className="ui-table">
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