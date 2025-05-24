import React from "react";
import {
  FiHome,
  FiCalendar,
  FiActivity,
  FiFileText,
  FiMessageSquare,
  FiSettings,
  FiClock,
  FiHelpCircle,
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <aside className={styles.sidebar}>
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* General Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>General</h3>
          <ul className={styles.navList}>
            {[
              { icon: <FiHome />, label: "Dashboard" },
              { icon: <FiFileText />, label: "History" },
              { icon: <FiCalendar />, label: "Calendar" },
              { icon: <FiClock />, label: "Appointments" },
              { icon: <FiActivity />, label: "Statistics" },
            ].map((item, index) => (
              <li
                key={`general-${index}`}
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

        <div className={styles.sectionSpacer} />

        {/* Tools Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Tools</h3>
          <ul className={styles.navList}>
            {[
              { icon: <FiMessageSquare />, label: "Chat" },
              { icon: <FiHelpCircle />, label: "Support" },
            ].map((item, index) => {
              const itemIndex = index + 5; // Offset from General items
              return (
                <li
                  key={`tools-${index}`}
                  className={`${styles.navItem} ${
                    activeItem === itemIndex ? styles.active : ""
                  }`}
                  onClick={() => setActiveItem(itemIndex)}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Settings */}
      <div className={styles.settingsSection}>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${
              activeItem === 8 ? styles.active : ""
            }`}
            onClick={() => setActiveItem(8)}
          >
            <span className={styles.navIcon}>
              <FiSettings />
            </span>
            Setting
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
