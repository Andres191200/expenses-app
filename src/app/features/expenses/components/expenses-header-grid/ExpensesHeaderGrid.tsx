"use client";
import React from "react";
import styles from "./styles.module.scss";
import ExpenseMetricCard from "../expense-metric-card/ExpenseMetricCard";
import { expensesStore } from "@/shared/lib/store";
import LineChart from "@/shared/components/charts/line-chart/LineChart";
import { formatExpensesToLineChart } from "../../utils/expenses_formatter";

export default function ExpensesHeaderGrid() {
  const totalExpensesValue = expensesStore((state) => Number(state.getTotalExpensesValue()));
  const expenses = expensesStore((state) => state.expenses);

  console.log(expenses);
  return (
    <div className={styles.headerGridComponent}>
      <div className={styles.mainExpensesCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Total" />
          <ExpenseMetricCard.Value value={`$ ${totalExpensesValue.toFixed(2)}`} />
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.monthlyExpensesCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Monthly" />
          <ExpenseMetricCard.Value value="$ 75.114,55" />
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.topExpensesCategories} />
      <div className={styles.timeLineExpensesTracker}>
        <LineChart data={formatExpensesToLineChart(expenses)} />
      </div>
      <div className={styles.highestExpenseCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Highest cost" />
          <ExpenseMetricCard.Value value="$ 29.000,00 (Pizza)" />
        </ExpenseMetricCard.Card>
      </div>
    </div>
  );
}
