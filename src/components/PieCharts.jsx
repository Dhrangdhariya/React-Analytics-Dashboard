import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieCharts = ({ totalUser, totalSubscription, activeSubscription }) => {
  const total = parseInt(totalUser) || 0;
  const subscribed = parseInt(totalSubscription) || 0;
  const active = parseInt(activeSubscription) || 0;

  const inactive = subscribed - active;
  const nonSubscribed = total - subscribed;

  const data = [
    { name: 'Active Subscriptions', value: active },
    { name: 'Inactive Subscriptions', value: inactive },
    { name: 'Non-Subscribers', value: nonSubscribed }
  ];

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="w-full h-[450px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            dataKey="value"
          >
            {data.map((_, ind) => (
              <Cell key={`cell-${ind}`} fill={COLORS[ind % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
