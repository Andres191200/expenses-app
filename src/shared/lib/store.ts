import { TExpense } from "@/app/features/expenses/models/expense";
import { create } from "zustand";

type TExpensesStoreState = {
  expenses: TExpense[];
  addExpense: (expense: TExpense) => void;
  removeExpense: (id: number) => void;
  getTotalExpensesValue: () => number;
  setInitialExpenses: (expenses: TExpense[]) => void;
};

export const expensesStore = create<TExpensesStoreState>((set, get) => ({
  expenses: [],
  setInitialExpenses: (expenses: TExpense[]) => {
    return set(() => ({
      expenses,
    }));
  },
  addExpense: (expense: TExpense) =>
    {
      console.log('adding expense to store');
      return set((state: TExpensesStoreState) => ({
        expenses: [...state.expenses, expense],
      }));
    },
  removeExpense: (id: number) =>
    set((state: TExpensesStoreState) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
  getTotalExpensesValue: () => {
    const expenses = get().expenses;
    return expenses.reduce((acc, curr) => acc + Number(curr.value), 0);
  },
}));
