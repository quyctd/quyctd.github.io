import React from "react";

import styles from "./scrollButton.module.scss";

const ScrollButton = () => {
  return (
    <span className={styles.scrollBtn}>
      <a href="/">
        <span className={styles.mouse}>
          <span />
        </span>
      </a>
    </span>
  );
};

export default ScrollButton;
