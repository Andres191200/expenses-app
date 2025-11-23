/* eslint-disable @typescript-eslint/no-explicit-any */
import { TExpense } from "../models/expense";

function formatCategoriesToLineChart(expenses:TExpense[]){
    const exp = expenses.reduce((acc:Partial<Record<string, number>>, expense: TExpense) => {
        const categoryName = expense.category.name;
        console.log(typeof expense.value, expense.value);
        if (!acc[categoryName]) {
            acc[categoryName] = 0;
        }
        acc[categoryName] += Number(expense.value);
        return acc;
    }, {});

    console.log('categories grouped: ', exp);

    return exp;
}

export {formatCategoriesToLineChart};