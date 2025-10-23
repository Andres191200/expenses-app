/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { ETheme, EVariant } from "../button/Button";

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
};

export default function Table<T extends Record<string, any>>({
  columns,
  data,
  isAddingEntry,
}: TTableProps<T>) {
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
          {data.length > 0 ? (
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
                    onClick={() => console.log("open expense creation modal")}
                    variant={EVariant.primary}
                  />
                </div>
              </td>
            </tr>
          )}
          {isAddingEntry ? (
            <tr key={"new-expense"}>
              <td>
                <input type="text" placeholder="new exp" />
              </td>
              <td>
                <input type="text" placeholder="cateogry dropdown here" />
              </td>
              <td>
                <input type="text" placeholder="value input here" />
              </td>
              <td>
                <p>{new Date().toISOString()}</p>
              </td>
              <td>
                <div className={styles.actionsRow}>
                  <Button label="Cancel" onClick={() => console.log('do cancel')} theme={ETheme.danger} small/>
                <Button label="Save" onClick={() => console.log('do save')} theme={ETheme.success} small/>
                </div>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
