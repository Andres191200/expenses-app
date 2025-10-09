"use client";
import React, { createContext } from "react";
import { TExpense } from "../../models/expense";
import styles from './styles.module.scss';

type TExpensesRoot = {
  children: React.ReactNode;
  value: TExpense[];
};

type TExpensesContext = {
  expenses: TExpense[];
};

export const ExpensesContext = createContext<TExpensesContext | null>(null);
export default function ExpensesRoot({ children, value }: TExpensesRoot) {
  return (
    <div className={styles.expensesRoot}>
      <ExpensesContext.Provider value={{expenses: value}}>{children}</ExpensesContext.Provider>
    </div>
  );
}
