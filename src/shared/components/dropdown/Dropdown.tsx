"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

type TDropdownProps<T> = {
  elements: T[];
  render: (element: T) => React.ReactNode;
  onChange: (element: T) => void;
};

export default function Dropdown<T>({ elements, render, onChange }: TDropdownProps<T>) {
  const [value, setValue] = useState<T | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function setDropdownValue(value: T): void {
    setValue(value);
    onChange(value);
    toggleDropdown();
  }

  function toggleDropdown(): void {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={styles.dropdownComponent}>
      <button type="button" onClick={toggleDropdown}>
        {value ? render(value) : 'Category'}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <ul>
            {elements.map((element) => (
              <li
                key={JSON.stringify(element)}
                onClick={() => setDropdownValue(element)}
              >
                {render(element)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
