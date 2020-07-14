import React from 'react';
import { BarChart, XAxis, YAxis, Legend, Bar, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const TotalVisitsChart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart margin={{ left: 100, right: 100 }} layout="vertical" data={chartData}>
        <CartesianGrid horizontal={false} />
        <XAxis tick={{ fontSize: 12 }} type="number" dataKey="count" domain={[0, Math.ceil(chartData[0].count / 100) * 100]} />
        <YAxis tick={{ fontSize: 12 }} type="category" dataKey="site" />
        <Tooltip contentStyle={{ fontSize: 12 }} />
        <Legend iconType="square" align="right" verticalAlign="top" wrapperStyle={{ left: 175, top: 25, fontSize: 12 }} />
        <Bar dataKey="count" fill="#303e9e" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default TotalVisitsChart;
