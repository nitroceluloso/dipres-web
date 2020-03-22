
import * as React from 'react';
import { PieChart, Pie, Tooltip } from "recharts";

export interface ProgramPieChartProps {
    
}
 
const ProgramPieChart: React.SFC<ProgramPieChartProps> = () => {
    const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
    {name: 'Group E', value: 278}, {name: 'Group F', value: 189}];
    return (
        <div>
            <PieChart width={800} height={400}>
                <Pie
                     dataKey={6}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    label
                />
                <Tooltip/>
            </PieChart>
        </div>
    );
}
 
export default ProgramPieChart;