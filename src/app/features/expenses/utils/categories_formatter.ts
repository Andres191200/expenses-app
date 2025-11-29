import { TExpense } from "../models/expense";

function formatCategoriesToLineChart(expenses: TExpense[]):Partial<Record<string, string | number>>[] {
  const exp = expenses.reduce(
    (acc: Partial<Record<string, number | string>>[], expense: TExpense) => {
      const categoryName = expense.category.name;
      const expenseValue = expense.value;
      const existingCategoryIndex = acc.findIndex((item) => {
        return item["name"] === categoryName;
      });

      if (existingCategoryIndex !== -1) {
        const existingCategory = acc[existingCategoryIndex];
        const currentValue = existingCategory[categoryName] || (0 as number);
        acc[existingCategoryIndex] = {
          name: categoryName,
          value:
            Number(currentValue) +
            Number(expense.value) +
            Number(acc[existingCategoryIndex]["value"]),
        };
      } else {
        acc.push({ name: categoryName, value: Number(expenseValue) });
      }
      return acc;
    },
    []
  );

  return exp;
}

export { formatCategoriesToLineChart };
