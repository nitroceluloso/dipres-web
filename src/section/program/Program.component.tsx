
import * as React from 'react';
import './Program.scss';

import { ProgramSectionProps, ProgramState } from "./types";
import ProgramChart from "./components/program-chart/ProgramChart";
import ProgramTable from "./components/program-table/ProgramTable.component";

class Program extends React.Component<ProgramSectionProps, ProgramState> {

    componentDidMount() {
        this.props.getPrograms();
    }

    render() {
        const { programListRaw, programByResult } = this.props;

        return (
            <div className="Program">
                <h1>Programas</h1>

                <div className="Program__chart">
                    <ProgramChart data={programByResult} />
                </div>

                <div className="Program__table">
                    <ProgramTable programList={programListRaw} />
                </div>

            </div>
        );
    }
}

export default Program;