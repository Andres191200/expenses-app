import styles from "@/app/styles.module.scss";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.mainGridLayout}>
        <div className={styles.headerGrid}>
          <div className={styles.mainExpensesCost} />
          <div className={styles.monthlyExpensesCost} />
          <div className={styles.topExpensesCategories} />
          <div className={styles.averageExpensesCost} />
          <div className={styles.highestExpenseCost} />
        </div>

        <div className={styles.expensesGrid}>
          <div className={styles.expenseCard} />
          <div className={styles.expenseCard} />
          <div className={styles.expenseCard} />
          <div className={styles.expenseCard} />
          <div className={styles.expenseCard} />
          <div className={styles.expenseCard} />
        </div>
      </div>
    </div>
  );
}
