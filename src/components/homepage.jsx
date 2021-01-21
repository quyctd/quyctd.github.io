import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ScrollButton from "./scrollButton";
import styles from "./index.module.scss";

const Homepage = () => {
  return (
    <div className={styles.appHoly}>
      <div className={styles.main}>
        <img src="/my.jpeg" alt="quyctd" className={styles.avatar} />
        <h1 className={styles.heading}>
          Hi there 👋
          <br />
          I’m Dinh Cong Quy
        </h1>
        <div className={styles.socialIcons}>
          <a href="https://github.com/quyctd" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrewdinh98"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            href="https://www.facebook.com/akashi.211"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
        </div>
        <p>I am a software engineer from Vietnam 🇻🇳</p>
        <ScrollButton />
        {/* <p>
            I am interested in developing a wide range of skills in diverse
            fields that would complement each other in unexpected ways. So I
            engrained this idea to my lifestyle, and created a goal of learning
            one new thing in depth every trimester.
          </p> */}
      </div>
      {/* <footer>Built and Designed with ❤️</footer> */}
    </div>
  );
};

export default Homepage;
