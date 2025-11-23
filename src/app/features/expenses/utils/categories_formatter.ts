import { TExpense } from "../models/expense";

function formatCategoriesToLineChart(expenses:TExpense[]){
    const exp = expenses.reduce((acc:Partial<Record<string, number | string>>[], expense: TExpense) => {
        const categoryName = expense.category.name;
        const expenseValue = expense.value;
        const existingCategoryIndex = acc.findIndex(item => {
            return item['name'] === categoryName;
        });
            console.log('existingCategoryIndex 1: ', existingCategoryIndex);
            console.log('categoryName 1: ', categoryName);


        if (existingCategoryIndex !== -1) {
            console.log('existingCategoryIndex 2: ', existingCategoryIndex);
            console.log('categoryName 2: ', categoryName);

            const existingCategory = acc[existingCategoryIndex];
            const currentValue = existingCategory[categoryName] || 0 as number;
            acc[existingCategoryIndex] = { name: categoryName,value: Number(currentValue) + Number(expense.value) + Number(acc[existingCategoryIndex]['value'])};
            console.log('transport: ', acc[existingCategoryIndex]);
        } else {
            acc.push({ name: categoryName, value: Number(expenseValue)});
        }
        return acc;
    
    }, []);

    return exp;
}

export {formatCategoriesToLineChart};