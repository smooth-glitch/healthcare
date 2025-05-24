import React from "react";
import styles from "./Header.module.css";
import { FiSearch, FiBell, FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>

      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} size={18} strokeWidth={2} />
        <input
          type="text"
          placeholder="Search reports, patients..."
          className={styles.searchInput}
          disabled
        />
      </div>

      <div className={styles.userActions}>
        <button className={styles.notificationBtn} aria-label="Notifications">
          <FiBell size={20} strokeWidth={2.5} />
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.userProfile}>
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Dr. Sarah Johnson"
            className={styles.avatar}
          />
          <span className={styles.userName}>Dr. Sarah Johnson</span>
        </div>

        <button className={styles.addButton} aria-label="Add new">
          <FiPlus size={20} strokeWidth={2.5} />
          <span>New</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
