"use client";
import React, { useState } from "react";
import Table from "@/components/table/Table";
import styles from "./styles.module.scss";
import { TExpense } from "../../models/expense";
import Button from "@/components/button/Button";
import { createTestExpense } from "@/actions/actions";

type ExpensesTableWrapperProps = {
  expenses: TExpense[];
};

export default function ExpensesTableWrapper({
  expenses,
}: ExpensesTableWrapperProps) {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
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
      render: (expense: TExpense) => <p>{expense.category}</p>,
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
      render: (expense: TExpense) => <button onClick={() => setIsAddingExpense(false)}>cancel</button>,
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
        isAddingEntry={isAddingExpense}
        columns={columns}
        data={expenses}
      />
    </div>
  );
}
