"use client";
import React, { use } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { EVariant } from "@/components/button/Button";
import { ExpensesContext } from "../expenses-root/ExpensesRoot";
import ExpenseCard from "../expense-card/ExpenseCard";

export default function ExpensesTable() {
  const { expenses } = use(ExpensesContext)!;
  return (
    <div className={styles.expensesTableComponent}>
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
            <ExpenseCard label={expense.title} key={expense.id} />
          ))}
        </div>

      )}
    </div>
  );
}
