
import * as React from 'react';
import { ProgramPieChartProps } from "./types";
import { VictoryPie } from "victory";

const ProgramPieChart: React.SFC<ProgramPieChartProps> = ({ data }) => {
    const showData = Object.keys(data).map((name) => { return { name, value: data[name], } })

    return (
        <div style={ {width: '450px', height: '400px'} }>
            <VictoryPie
                height={400}
                width={450}
                data={showData}
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