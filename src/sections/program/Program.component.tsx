
import * as React from 'react';
import programModule from './Program.module.scss';

import { ProgramSectionProps } from "./types";
import ProgramChart from "./components/program-chart/ProgramChart.component";
import ProgramTable from "./components/program-table/ProgramTable.component";


const Program: React.SFC<ProgramSectionProps> = ({ programListRaw, programByResult }) => {

    return (
        <div className={`${programModule.Program}`}>
            <h1>Programas</h1>

            <div className={`${programModule.Program__chart}`}>
                <ProgramChart data={programByResult} />
            </div>

            <div className="Program__table">
                <ProgramTable programList={programListRaw} />
            </div>

        </div>
    );
}

export default Program;