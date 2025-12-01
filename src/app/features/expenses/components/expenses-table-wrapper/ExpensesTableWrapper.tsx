"use client";
import React, { useState } from "react";
import Table from "@/shared/components/table/Table";
import styles from "./styles.module.scss";
import { TExpense } from "../../models/expense";
import Button from "@/shared/components/button/Button";
import { withToast } from "@/shared/components/hocs/withToast";
import { expensesStore } from "@/shared/lib/store";
import { createExpense } from "../../actions/createExpense";
import { TCategory } from "../../models/category";

const ELEMENTS_PER_PAGE = 5;

type ExpensesTableWrapperProps = {
  expenses: TExpense[];
  categories: TCategory[];
};

export default function ExpensesTableWrapper({
  expenses,
  categories,
}: ExpensesTableWrapperProps) {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const { addExpense } = expensesStore.getState();
  const [columns, setColumns] = useState([
    {
      key: "name",
      label: "Name",
      canSort: true,
      error: {
        status: false,
        render: () => (
          <p style={{ color: "red" }}>Expense name cannot be empty</p>
        ),
      },
      render: (expense: TExpense) => (
        <p className={styles.expenseName}>
          {expense.id ? expense.title : "render input here"}
        </p>
      ),
    },
    {
      key: "category",
      label: "Category",
      canSort: true,
      error: {
        status: false,
        render: () => <React.Fragment />,
      },
      render: (expense: TExpense) => <p>{expense.category?.name}</p>,
    },
    {
      key: "value",
      label: "Value",
      canSort: true,
      error: {
        status: false,
        render: () => (
          <p style={{ color: "red" }}>Value must be greater than 0</p>
        ),
      },
      render: (expense: TExpense) => <p>{expense.value}</p>,
    },
    {
      key: "date",
      label: "Date",
      canSort: true,
      error: {
        status: false,
        render: () => <React.Fragment />,
      },
      render: (expense: TExpense) => <p>{expense.createdAt?.toISOString()}</p>,
    },
    {
      key: "actions",
      label: "Actions",
      canSort: false,
      error: {
        status: false,
        render: () => <React.Fragment />,
      },
      render: () => (
        <button onClick={() => setIsAddingExpense(false)}>cancel</button>
      ),
    },
  ]);

  const createExpenseWithToast = withToast(
    createExpense,
    {
      success: "Expense created successfully",
    },
    {
      onSuccess: (expense) => {
        addExpense(expense);
      },
    }
  );

  async function _createExpense(expense: TExpense): Promise<void> {
    setLoading(true);
    await createExpenseWithToast({
      ...expense,
      createdAt: new Date(Date.now()),
    });
    setIsAddingExpense(false);
    setLoading(false);
  }

  function setErrorsByColumnNumber(columnNumber:number){
    setColumns(() => {
      return columns.map((column, index) => {
        if (index === columnNumber) {
          return {
            ...column,
            error: {
              status: true,
              render: () => (column.error.render())
            },
          };
        }
        return column;
      });
    })
  }

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
        setErrorsByColumnNumber={(columnNumber:number) => setErrorsByColumnNumber(columnNumber)}
        columns={columns}
        data={expenses}
        createEntry={(expense: TExpense) => _createExpense(expense)}
        currentPage={currentPage}
        elementsPerPage={ELEMENTS_PER_PAGE}
        changePage={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
}
