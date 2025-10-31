import { TExpense } from "@/app/features/expenses/models/expense";
import { create } from "zustand";

type TExpensesStoreState = {
    expenses: TExpense[];
}


export const useExpensesStore = create<TExpensesStoreState>((set) => ({
    expenses: [],
    addExpense: (expense: TExpense) => set((state: TExpensesStoreState) => ({
        expenses: [...state.expenses, expense],
    })),
    removeExpense: (id: number) => set((state: TExpensesStoreState) => ({
        expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));