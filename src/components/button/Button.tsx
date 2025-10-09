"use client";
import React, { use } from 'react';
import styles from './styles.module.scss';
import { ExpensesContext } from '@/app/features/expenses/components/expenses-root/ExpensesRoot';

export enum EVariant {
    primary,
    secondary,
}

type TButton = {
  label: string;
  variant: EVariant;
  onClick: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

function getVariant(variant: EVariant):string {
    switch(variant)
    {
        case EVariant.primary:
            return 'primary';
        case EVariant.secondary:
            return 'secondary';
        default:
            return 'primary';
    }
}


export default function Button({ label, variant, onClick, ...rest}: TButton) {
    const {expenses} = use(ExpensesContext)!;
  console.log('expenses from button: ', expenses);
  return (
    <div className={styles.buttonComponent}>
        <button onClick={onClick} className={getVariant(variant)} {...rest} >{label}</button>
    </div>
  )
}
