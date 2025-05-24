import React from "react";
import styles from "./Header.module.css";
import { FiSearch, FiBell, FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <span className={styles.logoFirst}>Health</span>
          <span className={styles.logoSecond}>care.</span>
        </div>
      </div>

      {/* Search bar */}
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder=""
          className={styles.searchInput}
          disabled
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
            alt="User"
            className={styles.avatar}
          />
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
