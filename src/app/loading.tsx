import headerGridStyles from "./features/expenses/components/expenses-header-grid/styles.module.scss";
import tableStyles from "./features/expenses/components/expenses-table-wrapper/styles.module.scss";
import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <div className={`${styles.mainGridLayout} ${styles.skeleton}`}>
      <div className={headerGridStyles.headerGridComponent}>
        <div className={headerGridStyles.mainExpensesCost} />
        <div className={headerGridStyles.monthlyExpensesCost} />
        <div className={headerGridStyles.topExpensesCategories} />
        <div className={headerGridStyles.timeLineExpensesTracker} />
        <div className={headerGridStyles.highestExpenseCost} />
        <div className={headerGridStyles.mainCategoriesCost} />
      </div>
      <div className={tableStyles.expensesTableWrapperComponent} />
    </div>
  );
}
