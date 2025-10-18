import styles from "@/app/styles.module.scss";
import { prisma } from "@/lib/prisma";
import { TExpense } from "./features/expenses/models/expense";
import ExpensesHeaderGrid from "@/app/features/expenses/components/expenses-header-grid/ExpensesHeaderGrid";
import ExpensesRoot from "./features/expenses/components/expenses-root/ExpensesRoot";
import ExpensesTableWrapper from "@/app/features/expenses/components/expenses-table-wrapper/ExpensesTableWrapper";

export default async function Home() {
  const expenses: TExpense[] = await prisma.expense.findMany();

  return (
    <div className={styles.homePage}>
      <section className={styles.mainGridLayout}>
        <ExpensesRoot value={expenses}>
          <ExpensesHeaderGrid />
          <ExpensesTableWrapper expenses={expenses} />
        </ExpensesRoot>
      </section>
    </div>
  );
}
