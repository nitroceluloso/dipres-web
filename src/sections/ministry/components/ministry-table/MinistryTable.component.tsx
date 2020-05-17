
import * as React from 'react';

import { MinistryTableProps } from "./types";
import Table from '../../../../shared/table/Table.component';
import { tableHeader } from "./MinistryTable.helper";


const ProgramTable: React.SFC<MinistryTableProps> = ({ ministryList }) => {
    return (
        <Table data={ministryList} config={tableHeader} />
    );
}

export default ProgramTable;