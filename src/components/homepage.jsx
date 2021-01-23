/* eslint-disable prettier/prettier */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";

const Homepage = () => {
  return (
    <div className={styles.appHoly}>
      <div className={styles.appMain}>
        <div className={styles.layoutContainer}>
          <div
            className={styles.layoutContainerStrip}
            style={{ gridColumnStart: 1, transform: "translateX(-8px)" }}
          />
          <div
            className={styles.layoutContainerStrip}
            style={{ gridColumnStart: 4, transform: "translateX(-8px)" }}
          />
          <div
            className={styles.layoutContainerStrip}
            style={{ gridColumnStart: 7, transform: "translateX(-8px)" }}
          />
          <div
            className={styles.layoutContainerStrip}
            style={{ gridColumnStart: 10, transform: "translateX(-8px)" }}
          />
          <div
            className={styles.layoutContainerStrip}
            style={{ gridColumnStart: 13, transform: "translateX(-8px)" }}
          />
          <div className={styles.homeHero}>
            <div>
              <div className={styles.heroImg}>
                <img src="/ava.JPG" alt="quyctd" />
                <div />
              </div>
              <div className={styles.heroHeading}>
                <h1 className={styles.typo}>
                  Hi there 👋
                  <br />
                  My name is Dinh Cong Quy
                </h1>
                <h1 className={styles.socialIcons}>
                  <a
                    href="https://www.linkedin.com/in/andrewdinh98"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                  <a
                    href="https://github.com/quyctd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                  <a
                    href="https://www.facebook.com/akashi.211"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                  </a>
                </h1>
              </div>

              <h2 className={styles.subHeading}>
                I am a&nbsp; 
                <span className={styles.highLight}>
                  {'<'}
                  Software Ninjaneer
                  {'>'}
                </span>
                &nbsp;from Vietnam 🇻🇳 
                <br />
                Who turn ☕️ into 
                <span className={styles.highLight}>{' <code/>'}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
