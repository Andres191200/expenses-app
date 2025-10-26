"use client";
import React, { use } from "react";
import styles from "./styles.module.scss";
import { ExpensesContext } from "../expenses-root/ExpensesRoot";
import ExpenseMetricCard from "../expense-metric-card/ExpenseMetricCard";

export default function ExpensesHeaderGrid() {
  const {expenses} = use(ExpensesContext)!;
  console.log('exp: ', expenses);
  return (
    <div className={styles.headerGridComponent}>
      <div className={styles.mainExpensesCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Total" />
          <ExpenseMetricCard.Value value="$ 242.350,32" />
          <ExpenseMetricCard.List expenses={expenses} label="Last expenses"/>
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.monthlyExpensesCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Monthly" />
          <ExpenseMetricCard.Value value="$ 75.114,55" />
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.topExpensesCategories} />
      <div className={styles.timeLineExpensesTracker} />
      <div className={styles.highestExpenseCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Highest cost" />
          <ExpenseMetricCard.Value value="$ 29.000,00 (Pizza)" />
        </ExpenseMetricCard.Card>
      </div>
    </div>
  );
}
