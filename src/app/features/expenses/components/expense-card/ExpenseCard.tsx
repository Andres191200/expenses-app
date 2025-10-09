import React from 'react';
import styles from './styles.module.scss';

type TExpenseCard = {
    label: string,
}

export default function ExpenseCard({ label }: TExpenseCard) {
    //DIVIDE THIS COMPONENT IN SUBCOMPONENTS TO ACHIEVE COMPOUND COMPONENT PATTERN
  return (
    <div className={styles.expenseCardComponent}>
        <p>{label}</p>
    </div>
  )
}
