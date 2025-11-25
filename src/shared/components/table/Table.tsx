/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { ETheme, EVariant } from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import { TCategory } from "@/app/features/expenses/models/category";

type TColumn<T> = {
  key: string;
  label: string;
  canSort: boolean;
  render: (model: T) => React.ReactNode;
};

type TTableProps<T> = {
  columns: TColumn<T>[];
  data: T[];
  isAddingEntry: boolean;
  cancelEntryAdding: () => void;
  createEntry: (entry: T) => void;
  addEntry: () => void;
  isLoading: boolean;
  categories: TCategory[];
};

export default function Table<T extends Record<string, any>>({
  columns,
  data,
  isAddingEntry,
  isLoading,
  cancelEntryAdding,
  createEntry,
  addEntry,
  categories,
}: TTableProps<T>) {
  const [newEntry, setNewEntry] = useState<Partial<T>>({});

  function handleChange<K extends keyof T>(key: K, value: T[K]): void {
    setNewEntry((prevState) => ({
      ...prevState,
      [key]: value,
    }));
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
          {data.length > 0 || isAddingEntry ? (
            data.map((item, rowIndex) => (
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
                    onClick={() => createEntry(newEntry! as T)}
                    theme={ETheme.success}
                    small
                  />
                </div>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
