/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { ETheme, EVariant } from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import { TCategory } from "@/app/features/expenses/models/category";

type TColumnError = {
  status: boolean;
  render: () => React.ReactNode;
};

type TColumn<T> = {
  key: string;
  label: string;
  canSort: boolean;
  render: (model: T) => React.ReactNode;
  error: TColumnError;
};

type TTableProps<T> = {
  columns: TColumn<T>[];
  data: T[];
  isAddingEntry: boolean;
  cancelEntryAdding: () => void;
  createEntry: (entry: T) => void;
  addEntry: () => void;
  setErrorsByColumnNumber: (columnNumber: number) => void;
  isLoading: boolean;
  currentPage: number;
  elementsPerPage: number;
  categories: TCategory[];
  changePage: (page: number) => void;
};

export default function Table<T extends Record<string, any>>({
  columns,
  data,
  isAddingEntry,
  isLoading,
  cancelEntryAdding,
  createEntry,
  addEntry,
  setErrorsByColumnNumber,
  categories,
  currentPage,
  elementsPerPage,
  changePage,
}: TTableProps<T>) {
  const [newEntry, setNewEntry] = useState<Partial<T>>({});
  const emptyTable = data.length === 0;
  const filteredData =
    data.length < elementsPerPage
      ? data
      : data.slice(
          (currentPage - 1) * elementsPerPage + 1,
          currentPage * elementsPerPage + 1
        );

    console.log('filteredData: ', filteredData);

  function handleChange<K extends keyof T>(key: K, value: T[K]): void {
    setNewEntry((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function isValidEntry(entry: T): boolean {
    if ((entry.title || "").trim().length === 0) {
      setErrorsByColumnNumber(0);
      return false;
    }
    if (entry.value === 0) {
      setErrorsByColumnNumber(2);
      return false;
    }
    return true;
  }

  function submitEntry(entry: T): void {
    // input validations
    if (!isValidEntry(entry)) {
      return;
    }
    createEntry(entry);
    setNewEntry({});
    //TODO: CALL SETERRORSBYCOLUMN TO CLEAN UP THE ERRORS STATES
  }

  return (
    <div className={styles.tableComponent}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isAddingEntry ? (
            <tr key={"new-expense"}>
              <td>
                <input
                  type="text"
                  placeholder="new exp"
                  value={(newEntry?.title as string) ?? ""}
                  onChange={(e) =>
                    handleChange("title", e.target.value as T["title"])
                  }
                />
                {columns[0].error.status === true
                  ? columns[0].error.render()
                  : null}
              </td>
              <td>
                <Dropdown<TTableProps<T>["categories"][number]>
                  elements={categories}
                  render={(category) => <div>{category.name}</div>}
                  onChange={(category) =>
                    handleChange("category", category as T["category"])
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="value input here"
                  value={newEntry?.value ?? 0}
                  onChange={(e) =>
                    handleChange("value", Number(e.target.value) as T["value"])
                  }
                />
                {columns[2].error.status === true
                  ? columns[2].error.render()
                  : null}
              </td>
              <td>
                <p>{new Date().toISOString()}</p>
              </td>
              <td>
                <div className={styles.actionsRow}>
                  <Button
                    label="Cancel"
                    onClick={() => cancelEntryAdding()}
                    theme={ETheme.danger}
                    small
                  />
                  <Button
                    //DO SPINNER INSTEAD STRING
                    label={isLoading ? "Saving..." : "Save"}
                    onClick={() => submitEntry(newEntry! as T)}
                    theme={ETheme.success}
                    small
                  />
                </div>
              </td>
            </tr>
          ) : null}
          {!emptyTable || isAddingEntry ? (
            filteredData.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column.key}>{column.render(item)}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>
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
                    onClick={() => addEntry()}
                    variant={EVariant.primary}
                  />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={styles.pagination}>
        {data.length > elementsPerPage
          ? Array.from(
              { length: Math.ceil(data.length / elementsPerPage) },
              (_, i) => i + 1
            ).map((i) => (
              <button
                type="button"
                onClick={() => changePage(i)}
                key={i + Date.now()}
                className={`${styles.paginationButton} ${
                  currentPage === i ? styles.active : null
                }`}
              >
                {i}
              </button>
            ))
          : null}
      </div>
    </div>
  );
}
