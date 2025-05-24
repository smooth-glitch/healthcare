import React from "react";
import {
  FiHome,
  FiCalendar,
  FiSettings,
  FiMessageSquare,
  FiActivity,
  FiFileText,
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

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
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>General</h3>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.navItem} ${
                activeItem === index ? styles.active : ""
              }`}
              onClick={() => setActiveItem(index)}
            >
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
