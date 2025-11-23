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
import { Props } from "recharts/types/cartesian/Line";

type TLineChartProps = {
  data: { date: string; value: number }[];
} & Props;

export default function LineChart({ data, ...props }: TLineChartProps) {
  return (
    <div className={styles.lineChartComponent}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            vertical={false}
          />
          <XAxis dataKey="date" tick={{ fill: "var(--text)" }} />
          <YAxis tick={{ fill: "var(--text)" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--bg-light)",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.5)",
              border: "none",
              borderRadius: "var(--border-radius-sm)",
            }}
            labelFormatter={(value) => `${value}`}
            formatter={(value) => [`$${value}`, "Expense"]}
          />
          <Line
            {...props}
            type="monotone"
            dataKey="value"
            stroke={props.stroke || "#8884d8"}
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
