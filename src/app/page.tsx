import styles from "@/app/styles.module.scss";
import ExpensesGrid from "@/app/features/expenses/components/expenses-grid/ExpensesGrid";
import { prisma } from "@/lib/prisma";
import HeaderGrid from "@/app/features/expenses/components/expenses-header-grid/ExpensesHeaderGrid";
import { TExpense } from "./features/expenses/models/expense";
import ExpensesHeaderGrid from "@/app/features/expenses/components/expenses-header-grid/ExpensesHeaderGrid";
import ExpensesRoot from "./features/expenses/components/expenses-root/ExpensesRoot";

export default async function Home() {
  const expenses:TExpense[] = await prisma.expense.findMany();
  return (
    <div className={styles.homePage}>
      <section className={styles.mainGridLayout}>
        <ExpensesRoot value={expenses}>
          <ExpensesHeaderGrid />
          <ExpensesGrid />
        </ExpensesRoot>
      </section>
    </div>
  );
}
