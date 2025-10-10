/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { use } from "react";
import styles from "./styles.module.scss";
import { ExpensesContext } from "../expenses-root/ExpensesRoot";

type TColumn<T> = {
  key: string,
  label: string,
  canSort: boolean,
}

type TExpensesTableProps<T> = {
  columns: TColumn<T>[],
  data: T,
}

export default function ExpensesTable<T extends Record<string, any>>({
  columns,data 
}: TExpensesTableProps<T>) {
  const { expenses } = use(ExpensesContext)!;
  return (
    <div className={styles.expensesTableComponent}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}

// <div className={styles.emptyExpenses}>
//   <div className={styles.emptyExpensesMessage}>
//     <Image
//       src={"/icons/info.svg"}
//       height={30}
//       width={30}
//       alt="info icon"
//     />
//     <p>There is no expenses yet</p>
//   </div>
//   <Button
//     label="Create one"
//     onClick={() => console.log("open expense creation modal")}
//     variant={EVariant.primary}
//   />
// </div>
