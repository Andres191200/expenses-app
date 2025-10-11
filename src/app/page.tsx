import styles from "@/app/styles.module.scss";
import { prisma } from "@/lib/prisma";
import { TExpense } from "./features/expenses/models/expense";
import ExpensesHeaderGrid from "@/app/features/expenses/components/expenses-header-grid/ExpensesHeaderGrid";
import ExpensesRoot from "./features/expenses/components/expenses-root/ExpensesRoot";
import ExpensesTable from "@/app/features/expenses/components/expenses-table/ExpensesTable";

export default async function Home() {
  const expenses:TExpense[] = await prisma.expense.findMany();

  const columns = [
    {
    key:'name',
    label:'Name',
    canSort:true,
  },
  {
    key:'category',
    label:'Category',
    canSort:true,
  },
  {
    key:'value',
    label:'Value',
    canSort:true,
  },
  {
    key:'date',
    label:'Date',
    canSort:true,
  },
  {
    key:'actions',
    label:'Actions',
    canSort:false,
  },
  ]
  
  return (
    <div className={styles.homePage}>
      <section className={styles.mainGridLayout}>
        <ExpensesRoot value={expenses}>
          <ExpensesHeaderGrid />
          <ExpensesTable<TExpense> columns={columns} data={expenses}/>
        </ExpensesRoot>
      </section>
    </div>
  );
}
