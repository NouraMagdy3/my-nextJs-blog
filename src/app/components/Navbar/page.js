import React from "react";
import styles from "./navbar.module.css";

const page = () => {
  return (
    <nav className={`${styles.nav} ${styles.flex}`}>
      <a href="/" className={styles.logo}>
        <span>Ixartz’s Blog</span>
      </a>
      <ul
        className={styles.flex}
        style={{
          listStyleType: "none",
          gap: "30px",
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default page;
