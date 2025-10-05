import styles from "@/app/styles.module.scss";
import ExpensesGrid from "@/components/expenses/expenses-grid/ExpensesGrid";
import HeaderGrid from "@/components/expenses/header-grid/HeaderGrid";

export default function Home() {
  // FETCH DATA FROM DB AND PASS DOWN TO THE COMPONENTS
  return (
    <div className={styles.homePage}>
      <section className={styles.mainGridLayout}>
        <HeaderGrid />
        <ExpensesGrid />
      </section>
    </div>
  );
}
