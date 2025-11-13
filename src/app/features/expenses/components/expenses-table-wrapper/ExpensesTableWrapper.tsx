"use client";
import React, { useState } from "react";
import Table from "@/shared/components/table/Table";
import styles from "./styles.module.scss";
import { TExpense } from "../../models/expense";
import Button from "@/shared/components/button/Button";
import { withToast } from "@/shared/components/hocs/withToast";
import { expensesStore } from "@/shared/lib/store";
import { createExpense } from "../../actions/createExpense";
import { TCategory } from "@/shared/actions/getCategories";

type ExpensesTableWrapperProps = {
  expenses: TExpense[];
  categories: TCategory[];
};

export default function ExpensesTableWrapper({
  expenses,
  categories,
}: ExpensesTableWrapperProps) {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {addExpense} = expensesStore.getState();


  const createExpenseWithToast = withToast(createExpense, {
  success: "Expense created successfully",
}, {
  onSuccess: (expense) => {
    addExpense(expense);
  }
});

  async function _createExpense(expense: TExpense): Promise<void> {
    setLoading(true);
    await createExpenseWithToast(expense);
    setIsAddingExpense(false);
    setLoading(false);
  }
  

  const columns = [
    {
      key: "name",
      label: "Name",
      canSort: true,
      render: (expense: TExpense) => (
        <p>{expense.id ? expense.title : "render input here"}</p>
      ),
    },
    {
      key: "category",
      label: "Category",
      canSort: true,
      render: (expense: TExpense) => <p>{expense.category.label}</p>,
    },
    {
      key: "value",
      label: "Value",
      canSort: true,
      render: (expense: TExpense) => <p>{expense.value}</p>,
    },
    {
      key: "date",
      label: "Date",
      canSort: true,
      render: (expense: TExpense) => <p>{expense.createdAt?.toISOString()}</p>,
    },
    {
      key: "actions",
      label: "Actions",
      canSort: false,
      render: () => (
        <button onClick={() => setIsAddingExpense(false)}>cancel</button>
      ),
    },
  ];

  return (
    <div className={styles.expensesTableWrapperComponent}>
      <div className={styles.addNewExpense}>
        <Button
          label="Add new expense"
          type="button"
          onClick={() => {
            setIsAddingExpense(true);
          }}
        />
      </div>
      <Table<TExpense>
        categories={categories}
        isAddingEntry={isAddingExpense}
        isLoading={isLoading}
        cancelEntryAdding={() => setIsAddingExpense(false)}
        addEntry={() => {
          setIsAddingExpense(true);
        }}
        columns={columns}
        data={expenses}
        createEntry={(expense: TExpense) => _createExpense(expense)}
      />
    </div>
  );
}
