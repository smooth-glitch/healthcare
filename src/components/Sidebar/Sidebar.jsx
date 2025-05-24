import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>General</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Dashboard</li>
          <li className={styles.navItem}>History</li>
          <li className={styles.navItem}>Calendar</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
