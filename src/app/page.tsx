import styles from "@/app/styles.module.scss";
import ExpensesGrid from "@/components/expenses/expenses-grid/ExpensesGrid";
import HeaderGrid from "@/components/expenses/header-grid/HeaderGrid";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const expenses = await prisma.expense.findMany();
  return (
    <div className={styles.homePage}>
      <section className={styles.mainGridLayout}>
      {/* CREATE A COMPOUND COMPONENT PASSING EXPENSES AS A ROOT PROP, CREATE A CONTEXT AND MAKE BOTH HEADERGRID AND EXPENSESGRID CONSUME THAT CONTEXT WITH THAT ROOT PROP */}
        <HeaderGrid />
        <ExpensesGrid />
      </section>
    </div>
  );
}
