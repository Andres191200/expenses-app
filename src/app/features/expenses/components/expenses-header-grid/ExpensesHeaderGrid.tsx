"use client";
import React from "react";
import styles from "./styles.module.scss";
import ExpenseMetricCard from "../expense-metric-card/ExpenseMetricCard";
import { expensesStore } from "@/shared/lib/store";
import LineChart from "@/shared/components/charts/line-chart/LineChart";
import { formatExpensesToLineChart } from "../../utils/expenses_formatter";
import { formatCategoriesToLineChart } from "../../utils/categories_formatter";
import CustomActiveShapePieChart from "@/shared/components/charts/pie-chart/PieChart";
import { TExpense } from "../../models/expense";

function getMonthlyExpensesValue(expenses: TExpense[]){
    const monthlyExpenses = expenses.reduce((acc: number, expense: TExpense) => {
        const expenseMonth = new Date(expense.createdAt).getMonth();
        const currentMonth = new Date().getMonth();

          if (expenseMonth === currentMonth && typeof expense.value === 'number') {
            return acc + expense.value; 
        }
        return acc;
    }, 0);
    return monthlyExpenses;
}

function getMostExpensiveExpense(expenses: TExpense[]){
    if (expenses.length === 0) {
        return "$ 0.00";
    }

    const mostExpensive = expenses.reduce((prev: TExpense, current: TExpense) => {
        return (prev.value > current.value) ? prev : current;
    });

    return `$ ${mostExpensive.value.toFixed(2)}`;
}

export default function ExpensesHeaderGrid() {
  const totalExpensesValue = expensesStore((state) =>
    Number(state.getTotalExpensesValue())
  );
  const expenses = expensesStore((state) => state.expenses);

  formatCategoriesToLineChart(expenses);
  return (
    <div className={styles.headerGridComponent}>
      <div className={styles.mainExpensesCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Total" />
          <ExpenseMetricCard.Value
            value={`$ ${totalExpensesValue.toFixed(2)}`}
          />
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.mainCategoriesCost}>
        <ExpenseMetricCard.Card>
          <CustomActiveShapePieChart data={formatCategoriesToLineChart(expenses)}/>
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.monthlyExpensesCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Monthly" />
          {/* calculate monthly expenses amount */}
          <ExpenseMetricCard.Value value={`$ ${getMonthlyExpensesValue(expenses).toFixed(2)}`} />
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.topExpensesCategories} />
      <div className={styles.timeLineExpensesTracker}>
        <ExpenseMetricCard.Card>
          <LineChart
            data={formatExpensesToLineChart(expenses)}
            stroke="var(--success)"
          />
        </ExpenseMetricCard.Card>
      </div>
      <div className={styles.highestExpenseCost}>
        <ExpenseMetricCard.Card>
          <ExpenseMetricCard.Label label="Highest cost" />
          <ExpenseMetricCard.Value value={getMostExpensiveExpense(expenses)} />
        </ExpenseMetricCard.Card>
      </div>
    </div>
  );
}
