
import * as React from 'react';
import { Column } from 'react-table';

export const tableHeader: Array<Column<any>> = [
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
        Cell: ({ row }) => {
            const { original } = row;

            return (
                <div>
                    {
                        original.evaluation.description
                    }
                </div>
            )
        }
    },
];