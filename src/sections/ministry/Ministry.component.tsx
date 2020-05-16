
import * as React from 'react';
import programModule from './Ministry.module.scss';

import { ProgramSectionProps, ProgramState } from "./types";
import MinistryChart from "./components/ministry-chart/MinistryChart";
import MinistryTable from "./components/ministry-table/MinistryTable.component";

class Ministry extends React.Component<ProgramSectionProps, ProgramState> {

    componentDidMount() {
        this.props.getPrograms();
    }

    render() {
        const { programListRaw, programByResult } = this.props;
        console.log(programListRaw);
        
        return (
            <div className={`${programModule.Program}`}>
                <h1>Ministerios</h1>

                <div className={`${programModule.Program__chart}`}>
                    <MinistryChart data={programByResult} />
                </div>

                <div className="Program__table">
                    <MinistryTable programList={programListRaw} />
                </div>

            </div>
        );
    }
}

export default Ministry;