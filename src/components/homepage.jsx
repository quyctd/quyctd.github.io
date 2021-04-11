/* eslint-disable prettier/prettier */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./index.module.scss";

const Homepage = () => {
  return (
    <div>
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.spacer} />

              <h1>Dinh Cong Quy</h1>
              <div className={styles.spacer} />

              <p className={styles.jobTitle}>Software Engineer 🇻🇳</p>
              <div className={styles.spacer} />
              <ul className={styles.socials}>
                <li>
                  <a href="https://github.com/quyctd" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github-square']} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/quyctd/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/akashi.211/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                  </a>
                </li>
              </ul>
              <p className={styles.description}>
                Hi, my name is Quy (Andrew). I am a Software Engineer from Hanoi, Vietnam. 
                <br /> 
                I am interested in developing a wide range of skills in diverse fields that would complement each other in unexpected ways. So I engrained this idea to my lifestyle, and created a goal of learning one new thing in depth every trimester.
              </p>
            </div>
            <div className={styles.avaContainer}>
              <div className={styles.spacer} />
              <div className={styles.avatar} />
            </div>
          </div>
          <div className={styles.contact}>
            <p>Interest in collaboration?</p>
            <form action="mailto:quy.dc98@gmail.com">
              <button type='submit'>🤙 Email me</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
