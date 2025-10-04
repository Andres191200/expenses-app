"use client";
import React from "react";
import styles from "./styles.module.scss";
import ExpenseCard from "../expense-card/ExpenseCard";

export default function HeaderGrid() {
  return (
    <div className={styles.headerGridComponent}>
      <div className={styles.mainExpensesCost}>
        <ExpenseCard.Card>
          <ExpenseCard.Label label="Total" />
          <ExpenseCard.Value value="$ 242.350,32" />
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
