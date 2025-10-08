"use client";
import React, { createContext } from "react";
import { TExpense } from "../../models/expense";

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
    <div>
      <ExpensesContext.Provider value={{expenses: value}}>{children}</ExpensesContext.Provider>
    </div>
  );
}
