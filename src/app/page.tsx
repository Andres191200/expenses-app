import styles from "@/app/styles.module.scss";
import { TExpense } from "./features/expenses/models/expense";
import ExpensesHeaderGrid from "@/app/features/expenses/components/expenses-header-grid/ExpensesHeaderGrid";
import ExpensesRoot from "./features/expenses/components/expenses-root/ExpensesRoot";
import ExpensesTableWrapper from "@/app/features/expenses/components/expenses-table-wrapper/ExpensesTableWrapper";
import getExpenses from "./features/expenses/actions/getExpenses";
import { Toaster } from "react-hot-toast";
import getCategories, { TCategory } from "@/shared/actions/getCategories";

export default async function Home() {
  console.log('getting expenses from db');
  const expenses: TExpense[] = await getExpenses();
  const categories: TCategory[] = await getCategories();

  return (
    <div className={styles.homePage}>
      <Toaster />
      <section className={styles.mainGridLayout}>
        <ExpensesRoot value={expenses}>
          <ExpensesHeaderGrid />
          <ExpensesTableWrapper expenses={expenses} categories={categories}/>
        </ExpensesRoot>
      </section>
    </div>
  );
}
