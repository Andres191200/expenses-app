"use client";
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { TExpense } from '@/app/features/expenses/models/expense';

export default function Dropdown() {
    const [value, setValue] = useState<TExpense['category']>('misc');

  return (
    <div className={styles.dropdownComponent}>
        <button type="button">Categoría</button>
    </div>
  )
}
