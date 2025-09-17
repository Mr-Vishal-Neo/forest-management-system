import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { lineChartData } from '../../data/siteAnalysisData';

export default function CustomLineChart() {
  return (
    <ResponsiveContainer width="50%" height={200}>
      <LineChart data={lineChartData}>
        <CartesianGrid stroke="#eaeaea" strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          tick={{ fill: '#90A4AE' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="number"
          domain={['dataMin', 'dataMax']}
          ticks={[1, 2, 3, 4, 5]}
          tickFormatter={(tick) => {
            switch (tick) {
              case 1: return 'Lorem';
              case 2: return 'ipsum';
              case 3: return 'Sit';
              case 4: return 'dollar';
              case 5: return 'Na';
              default: return '';
            }
          }}
          tick={{ fill: '#90A4AE' }}
          axisLine={false}
          tickLine={false}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#00E5FF"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
