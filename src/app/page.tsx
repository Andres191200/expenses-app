import styles from "@/app/styles.module.scss";
import ExpensesGrid from "@/components/expenses/expenses-grid/ExpensesGrid";
import HeaderGrid from "@/components/expenses/header-grid/HeaderGrid";

export default function Home() {
  
  return (
    <div className={styles.homePage}>
      <section className={styles.mainGridLayout}>
        <HeaderGrid />
        <ExpensesGrid />
      </section>
    </div>
  );
}
