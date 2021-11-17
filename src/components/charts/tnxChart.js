import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import Moralis from "moralis";

export default function ChartTxt(props) {
  const wallet = useSelector((state) => state.wallet.value);

  let tempData;

  let balance = [];

  wallet.erc20Assets.map((item) => {
    return balance.push({
      name: item.name,
      uv: Moralis.Units.FromWei(item.balance, item.decimals),
      pv: Moralis.Units.FromWei(item.balance, item.decimals),
      amt: Moralis.Units.FromWei(item.balance, item.decimals),
      cnt: Moralis.Units.FromWei(item.balance, item.decimals),
    });
  });
  function compare(a, b) {
    if (a.balance < b.balance) {
      return -1;
    }
    if (a.balance > b.balance) {
      return 1;
    }
    return 0;
  }
  balance.sort(compare);
  tempData = balance.slice(Math.max(balance.length - 5, 0));

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2.5 / 1}>
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={tempData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
