import React from "react";
import styles from "./Header.module.css"; // Must match filename exactly
import { FiSearch, FiBell, FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>

      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search reports, patients..."
          className={styles.searchInput}
          disabled
        />
      </div>

      <div className={styles.userActions}>
        <button className={styles.notificationBtn}>
          <FiBell />
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.userProfile}>
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="User profile"
            className={styles.avatar}
          />
          <span className={styles.userName}>Dr. Sarah Johnson</span>
        </div>

        <button className={styles.addButton}>
          <FiPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
