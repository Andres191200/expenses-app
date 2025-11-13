"use client";
import React, { createContext, useEffect } from "react";
import { TExpense } from "../../models/expense";
import styles from "./styles.module.scss";
import { expensesStore } from "@/shared/lib/store";

type TExpensesRoot = {
  children: React.ReactNode;
  value: TExpense[];
};

type TExpensesContext = {
  expenses: TExpense[];
};

export const ExpensesContext = createContext<TExpensesContext | null>(null);
export default function ExpensesRoot({ children, value }: TExpensesRoot) {
  const { setInitialExpenses } = expensesStore.getState();
  useEffect(() => {
    console.log('setting initial expenses');
    setInitialExpenses(value);
    console.log('setted initial expenses');

  }, [value, setInitialExpenses]);

  return (
    <div className={styles.expensesRoot}>
      <ExpensesContext.Provider value={{ expenses: value }}>
        {children}
      </ExpensesContext.Provider>
    </div>
  );
}
