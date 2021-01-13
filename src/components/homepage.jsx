import React from "react";
import ParticlesBg from "particles-bg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";

const Homepage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>
            Hi there 👋
            <br />
            I’m Dinh Quy
          </h1>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/quyctd"
              target="_blank"
              rel="noreferrer"
            >
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
          <p>
            I am interested in developing a wide range of skills in diverse
            fields that would complement each other in unexpected ways.
          </p>
        </div>
        <footer>Built and Designed with ❤️</footer>
      </div>
      <ParticlesBg type="cobweb" color="#34b4eb" num={150} bg />
    </>
  );
};

export default Homepage;
