"use client";
import React from "react";
import styles from './styles.module.scss';

export default function ExpensesGrid() {
  return (
    <div className={styles.expensesGridComponent}>
      <div className={styles.expenseCard} />
      <div className={styles.expenseCard} />
      <div className={styles.expenseCard} />
      <div className={styles.expenseCard} />
      <div className={styles.expenseCard} />
      <div className={styles.expenseCard} />
    </div>
  );
}
