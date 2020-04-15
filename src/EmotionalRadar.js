import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Alegría', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Tristeza', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Sorpresa', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Desagrado', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Miedo', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Enojo', A: 65, B: 85, fullMark: 150,
  },
];


class EmotionalRadar extends PureComponent {

  render() {
    return (
      <RadarChart  cx={175} cy={175} outerRadius={120} width={350} height={450} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Cuentas verificadas" dataKey="A" stroke="#2387f3" fill="#2387f3" fillOpacity={0.6} />
        <Radar name="Cuentas no verificadas" dataKey="B" stroke="#23f359" fill="#23f359" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    );
  }
}

export default EmotionalRadar;
