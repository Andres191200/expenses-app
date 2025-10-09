"use client";
import React, { use } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { EVariant } from "@/components/button/Button";
import { ExpensesContext } from "../expenses-root/ExpensesRoot";
import ExpenseCard from "../expense-card/ExpenseCard";

export default function ExpensesGrid() {
  const { expenses } = use(ExpensesContext)!;
  return (
    <div className={styles.expensesGridComponent}>
      {expenses.length === 0 ? (
        <div className={styles.emptyExpenses}>
          <div className={styles.emptyExpensesMessage}>
            <Image
              src={"/icons/info.svg"}
              height={30}
              width={30}
              alt="info icon"
            />
            <p>There is no expenses yet</p>
          </div>
          <Button
            label="Create one"
            onClick={() => console.log("open expense creation modal")}
            variant={EVariant.primary}
          />
        </div>
      ) : (
        <div className={styles.expensesMainGrid}>
          {expenses.map((expense) => (
            <div className={styles.expenseCard} key={expense.id}>
              <ExpenseCard label={expense.title} />
            </div>
          ))}
              <ExpenseCard label="test" />

        </div>
      )}
    </div>
  );
}
