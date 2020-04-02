
import * as React from 'react';
import { CellProps } from 'react-table';
import { Program } from "../../../../services/program/types";

export const tableHeader = [
    {
        Header: 'Nombre',
        accessor: 'name'
    },
    {
        Header: 'Ministerio',
        accessor: 'ministry.name'
    },
    {
        Header: 'Servicio Publico',
        accessor: 'publicService.name'
    },
    {
        Header: 'Calificacion',
        accessor: 'evaluation.value',
        Cell: ( cellProps: CellProps<Program> ) => {
            return (
                <div>
                    {
                        cellProps.row.original.evaluation.description
                    }
                </div>
            )
        }
    },
];