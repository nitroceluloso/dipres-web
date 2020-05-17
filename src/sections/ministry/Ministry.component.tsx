
import * as React from 'react';
import ministryStyle from './Ministry.module.scss';


import { ProgramSectionProps, ProgramState } from "./types";
import MinistryChart from "./components/ministry-chart/MinistryChart";
import MinistryTable from "./components/ministry-table/MinistryTable.component";

class Ministry extends React.Component<ProgramSectionProps, ProgramState> {

    componentDidMount() {
        this.props.getMinistry();
    }

    render() {
        const { ministryList } = this.props;

        return (
            <div className={`${ministryStyle.Ministry}`}>
                <h1>Ministerios</h1>

                <div className="ministry__chart">
                    {/* <MinistryChart data={programByResult} /> */}
                </div>

                <div className="ministry__table">
                    <MinistryTable ministryList={ministryList} />
                </div>

            </div>
        );
    }
}

export default Ministry;