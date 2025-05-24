import React from "react";
import {
  FiHome,
  FiCalendar,
  FiActivity,
  FiFileText,
  FiMessageSquare,
  FiSettings,
  FiTool,
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const navSections = [
    {
      title: "General",
      items: [
        { icon: <FiHome />, label: "Dashboard" },
        { icon: <FiFileText />, label: "History" },
        { icon: <FiCalendar />, label: "Calendar" },
        { icon: <FiCalendar />, label: "Appointments" },
        { icon: <FiActivity />, label: "Statistics" },
      ],
    },
    {
      title: "Tools",
      items: [
        { icon: <FiMessageSquare />, label: "Chat" },
        { icon: <FiMessageSquare />, label: "Support" },
      ],
    },
    {
      title: "",
      items: [{ icon: <FiSettings />, label: "Setting" }],
    },
  ];

  return (
    <aside className={styles.sidebar}>
      {navSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          {section.title && (
            <h3 className={styles.sectionTitle}>{section.title}</h3>
          )}
          <ul className={styles.navList}>
            {section.items.map((item, itemIndex) => {
              const globalIndex = navSections
                .slice(0, sectionIndex)
                .reduce((acc, curr) => acc + curr.items.length, itemIndex);

              return (
                <li
                  key={globalIndex}
                  className={`${styles.navItem} ${
                    activeItem === globalIndex ? styles.active : ""
                  }`}
                  onClick={() => setActiveItem(globalIndex)}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
