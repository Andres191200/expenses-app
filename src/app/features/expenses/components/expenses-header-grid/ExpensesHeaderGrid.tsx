"use client";
import React, { use } from "react";
import styles from "./styles.module.scss";
import ExpenseCard from "@/app/features/expenses/components/expense-card/ExpenseCard";
import { ExpensesContext } from "../expenses-root/ExpensesRoot";

export default function ExpensesHeaderGrid() {
  const {expenses} = use(ExpensesContext)!;
  console.log('value from expensesheadergrid:', expenses);
  const testExpenses = [
    {
      id: 1,
      title: 'Pizza',
      value: 15000,
      category: 'Food'
    },
    {
      id: 2,
      title: 'Party',
      value: 11000,
      category: 'Entertainment'
    },
    {
      id: 3,
      title: 'Groceries',
      value: 8000,
      category: 'House'
    },
        {
      id: 4,
      title: 'Gambling',
      value: 6000,
      category: 'Entertainment'
    },
  ];
  return (
    <div className={styles.headerGridComponent}>
      <div className={styles.mainExpensesCost}>
        <ExpenseCard.Card>
          <ExpenseCard.Label label="Total" />
          <ExpenseCard.Value value="$ 242.350,32" />
          <ExpenseCard.List expenses={testExpenses} label="Last expenses"/>
        </ExpenseCard.Card>
      </div>
      <div className={styles.monthlyExpensesCost}>
        <ExpenseCard.Card>
          <ExpenseCard.Label label="Monthly" />
          <ExpenseCard.Value value="$ 75.114,55" />
        </ExpenseCard.Card>
      </div>
      <div className={styles.topExpensesCategories} />
      <div className={styles.timeLineExpensesTracker} />
      <div className={styles.highestExpenseCost}>
        <ExpenseCard.Card>
          <ExpenseCard.Label label="Highest cost" />
          <ExpenseCard.Value value="$ 29.000,00 (Pizza)" />
        </ExpenseCard.Card>
      </div>
    </div>
  );
}
