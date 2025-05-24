import React from "react";
import styles from "./Header.module.css";
import { FiSearch, FiBell, FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoFirst}>Health</span>
        <span className={styles.logoSecond}>care.</span>
      </div>

      {/* Search bar */}
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} size={18} strokeWidth={2.3} />
        <input
          type="text"
          className={styles.searchInput}
          disabled
          aria-label="Search"
        />
      </div>

      {/* User actions*/}
      <div className={styles.userActions}>
        {/* Notification bell*/}
        <button className={styles.notificationBtn} aria-label="Notifications">
          <FiBell size={20} strokeWidth={2.5} />
          <span className={styles.badge}>3</span>
        </button>

        {/* User profile */}
        <div className={styles.userProfile}>
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Dr. Emily"
            className={styles.avatar}
          />
          <span className={styles.userName}>Dr. Sarah Johnson</span>
        </div>

        {/* Add button */}
        <button className={styles.addButton} aria-label="Add new">
          <FiPlus
            size={18} // Slightly smaller than bell
            strokeWidth={2.5}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
