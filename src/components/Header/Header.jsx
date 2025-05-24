import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      <div className={styles.userActions}>
        <div className={styles.userAvatar}>
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="User"
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
