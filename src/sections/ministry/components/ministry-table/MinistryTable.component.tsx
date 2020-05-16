
import * as React from 'react';

import { ProgramTableProps } from "./types";
import Table from '../../../../shared/table/Table.component';
import { tableHeader } from "./MinistryTable.helper";


const ProgramTable: React.SFC<ProgramTableProps> = ({ programList }) => {
    return (
        <Table data={programList} config={tableHeader} />
    );
}

export default ProgramTable;