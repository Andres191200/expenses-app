"use client";
import React, { JSX } from "react";
import styles from "./styles.module.scss";

type TCard = {
  children: JSX.Element | JSX.Element[];
};

export function Card({ children }: TCard) {
  return <div className={styles.expenseCardComponent}>{children}</div>;
}

type TValue = {
  value: string;
};

export function Value({ value }: TValue) {
  return (
    <div className={styles.expenseCardValue}>
      <h3>{value}</h3>
    </div>
  );
}

type TLabel = {
  label: string;
};

export function Label({ label }: TLabel) {
  return (
    <div className={styles.expenseCardLabel}>
      <span>{label}</span>
    </div>
  );
}

type TList = {
  // TODO: TYPE THIS CORRECTLY LATER
  expenses: any[];
}

export function List({ expenses }: TList) {
  return (
    <div className={styles.expenseCardList}>
      {
        expenses.map((expense) => (
          <div className={styles.expensesList}>
            <span>{expense.label}</span>
            <span>{expense.value}</span>
          </div>))
      }
    </div>
  );
}

export function Divider(){
  return <div className={styles.expenseCardDivider} />
} 


export default {
  Card,
  Value,
  Label,
  List,
  Divider,
};
