import { number } from "zod";
import { TExpense } from "../models/expense";

function formatCategoriesToLineChart(expenses:TExpense[]){
    const exp = expenses.reduce((acc:Partial<Record<string, number | string>>[], expense: TExpense) => {
        const categoryName = expense.category.name;
        const expenseValue = expense.value;
        const existingCategoryIndex = acc.findIndex(item => Object.keys(item)[0] === categoryName);

        if (existingCategoryIndex !== -1) {
            const existingCategory = acc[existingCategoryIndex];
            const currentValue = existingCategory[categoryName] || 0;
            acc[existingCategoryIndex] = { [categoryName]: currentValue as number+ expense.value };
        } else {
            acc.push({ name: categoryName, value: Number(expenseValue)});
        }
        return acc;
    
    }, []);

    return exp;
}

export {formatCategoriesToLineChart};