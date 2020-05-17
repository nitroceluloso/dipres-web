
import * as React from 'react';
import { CellProps } from 'react-table';

export const tableHeader = [
    {
        Header: 'Ministerio',
        accessor: 'name'
    },
    {
        Header: 'Programas',
        Cell: ( cellProps: CellProps<any> ) => {
            return (
                <div>
                    {cellProps.row.original.programList.length}
                </div>
            )
        }
    },
    {
        Header: 'Evaluación promedio',
        accessor: 'evaluation.description'
    }
];