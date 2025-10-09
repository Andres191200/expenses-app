import React from 'react';

type TExpenseCard = {
    label: string,
}

export default function ExpenseCard({ label }: TExpenseCard) {
    //DIVIDE THIS COMPONENT IN SUBCOMPONENTS TO ACHIEVE COMPOUND COMPONENT PATTERN
  return (
    <div>
        <p>{label}</p>
    </div>
  )
}
