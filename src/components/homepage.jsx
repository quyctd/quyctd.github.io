import React from "react";
import styles from "./index.module.scss";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>
          Hi there 👋
          <br />
          I’m Dinh Quy
        </h1>
        <p>I am a software engineer from Vietnam 🇻🇳</p>
        <p>
          I am interested in developing a wide range of skills in diverse fields
          that would complement each other in unexpected ways.
        </p>
      </div>
      <footer>Built and Designed with ❤️</footer>
    </div>
  );
};

export default Homepage;
