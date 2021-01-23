import React from "react";

import styles from "./index.module.scss";

const Experiences = () => {
  return (
    <div className={styles.exps}>
      <h2 className="typo-display2">My Working Experiences</h2>
      <h3 className={styles.subheading}>
        I am a software engineer who interested in developing a wide range of
        skills in diverse fields that would complement each other in unexpected
        ways.
        <br />
        I&apos;m specializes in developing web applications using JavaScript,
        Ruby, Python with some frameworks: Ruby on Rails, Flask, Django,
        ReactJS, NextJS. I also have knowledge on infrastructure using cloud
        services such as Amazon Web Services (AWS) and Google Cloud Platform
        (GCP).
        <br />
        For all of my technology stacks, please refer the `Gear` section.
      </h3>
    </div>
  );
};

export default Experiences;
