import { TExpense } from "../models/expense";

function formatExpensesToLineChart(expenses: TExpense[]):{date: string, value:number}[]{
    return expenses.map((expense) => {
        return {
            date: expense.createdAt.toISOString().split('T')[0],
            value: expense.value
        }
    })
}

export {formatExpensesToLineChart};