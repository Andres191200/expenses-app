"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { TExpense } from "@/app/features/expenses/models/expense";

type TDropdownProps<T> = {
  elements: T[];
  render: (element: T) => React.ReactNode;
};

export default function Dropdown<T>({ elements, render }: TDropdownProps<T>) {
  const [value, setValue] = useState<TExpense["category"] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleDropdown(): void {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={styles.dropdownComponent}>
      <button type="button" onClick={toggleDropdown}>
        Category
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {/* <ul>{elements.map((element) => render(element))}</ul> */}
          <ul>dropdown content</ul>
        </div>
      )}
    </div>
  );
}
