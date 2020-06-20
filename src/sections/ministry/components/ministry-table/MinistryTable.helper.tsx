
import * as React from 'react';
import { CellProps } from 'react-table';

export const tableHeader = [
    {
        Header: 'Ministerio',
        accessor: 'name'
    },
    {
        Header: 'Programas',
        accessor: 'programListQuantity'
    },
    {
        Header: 'Evaluación promedio',
        accessor: 'evaluation.description'
    }
];