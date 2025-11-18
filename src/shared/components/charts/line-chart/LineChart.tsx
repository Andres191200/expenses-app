import React from "react";
import styles from "./styles.module.scss";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "2025-10-01", value: 12 },
  { date: "2025-10-02", value: 18 },
  { date: "2025-10-03", value: 5 },
];

export default function LineChart() {
  return (
    <div className={styles.lineChartComponent}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
