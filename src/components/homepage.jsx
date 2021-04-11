/* eslint-disable prettier/prettier */
import React from "react";

import styles from "./index.module.scss";

const Homepage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1>Dinh Cong Quy</h1>
            <h3>Software Engineer</h3>
            <div className={styles.socials}>
              Github, Facebook
            </div>
            <p className={styles.description}>
              Hi there, I am quyctd! 👋
              <br />
              I am a software engineer from Vietnam 🇻🇳
              <br />
              I am interested in developing a wide range of skills in diverse fields that would complement each other in unexpected ways. So I engrained this idea to my lifestyle, and created a goal of learning one new thing in depth every trimester.
            </p>
          </div>
          <div className={styles.avaContainer}>
            <div className={styles.avatar} />
          </div>
        </div>
        <div className={styles.contact}>
          <p>Interest in collaboration?</p>
          <button type='button'>Email me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
