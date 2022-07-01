import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryPie } from 'victory';

const data = [
  { time: 1, awakeness: 8 },
  { time: 2, awakeness: 2 },
  { time: 3, awakeness: 4 },
  { time: 4, awakeness: 7 },
];

export default function MyChart() {
  return (
    <div className="chart">
      <VictoryChart
        // domainPadding={10}
        style={{
          background: { fill: 'white' },
        }} >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={['9am', '10am', '11am', '12pm']} />
        <VictoryAxis
          dependentAxis
          tickValues={[8, 2, 4, 7]}
          tickFormat={['alert', 'sleepy', 'tired', 'awake']}
        />
        <VictoryLine
          data={data}
          x="time"
          y="awakeness" />
      </VictoryChart>
    </div>
  );
}

export function SecondChart() {
  return (
    <div className='second-chart'>
      <VictoryPie
        origin={{ y: 250 }}
        padding={100}
        colorScale={['salmon', 'plum', 'thistle', 'paleturquoise']}
        data={[
          { x: 'procrastinating', y: 45 },
          { x: 'looking for inspiration', y: 30 },
          { x: 'snacking/coffee', y: 20 },
          { x: 'actually coding', y: 5 },
        ]}
        labels={({ datum }) => datum.x}>

      </VictoryPie>
    </div>
  );
}