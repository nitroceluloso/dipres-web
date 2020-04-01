
import * as React from 'react';

import { ProgramSectionProps, ProgramState } from "./types";
import { fetchProgramAction } from "../../store/program/actions";

import Table from "../../shared/table/Table.component";
import { tableHeader } from "./Program.helper";
import ProgramChart from "./components/program-chart/ProgramChart";
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
                    <Table data={programListRaw} config={tableHeader} />
                </div>

            </div>
        );
    }
}

export default Program;