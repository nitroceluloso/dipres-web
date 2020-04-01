
import * as React from 'react';

import { ProgramSectionProps, ProgramState } from "./types";
import { fetchProgramAction } from "../../store/program/actions";

import ProgramChart from "./components/program-chart/ProgramChart";
import ProgramTable from "./components/program-table/ProgramTable.component";
// import { DispatchProp } from 'react-redux';

class Program extends React.Component<ProgramSectionProps, ProgramState> {
    constructor(props: ProgramSectionProps) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const { dispatch } = (this.props as any);
        dispatch(fetchProgramAction());
    }

    render() {
        const { programListRaw = [], programByResult } = this.props;

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