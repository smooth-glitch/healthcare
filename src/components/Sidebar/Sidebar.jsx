import React from "react";
import styles from "./Sidebar.module.css";

import {
  FiHome,
  FiCalendar,
  FiSettings,
  FiMessageSquare,
  FiActivity,
  FiFileText,
} from "react-icons/fi";

const navItems = [
  { icon: <FiHome />, label: "Dashboard" },
  { icon: <FiFileText />, label: "History" },
  { icon: <FiCalendar />, label: "Calendar" },
  { icon: <FiCalendar />, label: "Appointments" },
  { icon: <FiActivity />, label: "Statistics" },
  { icon: <FiFileText />, label: "Tests" },
  { icon: <FiMessageSquare />, label: "Chat" },
  { icon: <FiMessageSquare />, label: "Support" },
  { icon: <FiSettings />, label: "Setting" },
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>General</h3>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <span className={styles.navIcon}>{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
