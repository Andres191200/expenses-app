"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { EVariant } from "@/components/button/Button";
import { TExpense } from "../../models/expense";

export default function ExpensesGrid() {
  const expenses: TExpense[] = [];
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
          <Button label="Create one" onClick={() => console.log('open expense creation modal')} variant={EVariant.primary}/>
        </div>
      ) : (
        expenses.map((expense) => <div className={styles.expenseCard} key={expense.id}/>)
      )}
    </div>
  );
}
