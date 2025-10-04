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

export default {
  Card,
  Value,
  Label,
};
