import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useSelector } from 'react-redux';

const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FF8042"];

export default function ERC20Chart(props) {

  const wallet = useSelector((state) => state.wallet.value);
  const data = [
    { name: "tokens", balance: wallet.erc20Assets.length || 0 },
    { name: "nfts", balance: wallet.nfts.total || 0},
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart height={250}>
        <Pie
          data={data}
          labelLine={true}
          label="name"
          aria-controls="name"
          outerRadius={90}
          fill="#8884d8"
          dataKey="balance"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
