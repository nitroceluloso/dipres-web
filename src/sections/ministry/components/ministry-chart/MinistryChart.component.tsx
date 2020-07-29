
import * as React from 'react';
import { ProgramPieChartProps } from "./types";
import { VictoryPie } from "victory";

const ProgramPieChart: React.SFC<ProgramPieChartProps> = ({ data }) => {

    return (
        <div className="ministry__chart">
            <VictoryPie
                height={400}
                width={450}
                data={data}
                x='name'
                y='value'
                innerRadius={50}
                colorScale="qualitative"
                labels={ (el) => { return `${el.datum.name} (${el.datum.value})` } }
            />
        </div>
    );
}

export default ProgramPieChart;