
import * as React from 'react';
import './Ministry.scss';

import { MinistrySectionProps, MinistryState } from "./types";
import MinistryChart from "./components/ministry-chart/MinistryChart.component";
import MinistryTable from "./components/ministry-table/MinistryTable.component";

class Ministry extends React.Component<MinistrySectionProps, MinistryState> {

    componentDidMount() {
        const { getMinistry = () => {} } = this.props;
        getMinistry();
    }

    render() {
        const { ministryList, ministryChart } = this.props;

        return (
            <div className="Ministry">
                <h1>Ministerios</h1>

                <MinistryChart data={ministryChart} />

                <div className="ministry__table">
                    <MinistryTable ministryList={ministryList} />
                </div>

            </div>
        );
    }
}

export default Ministry;