import React from "react";
import Project from "./Project/Project";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="work" className={styles.projects}>
      <Project />
      <div className="container">
        <div className={styles.line}></div>
      </div>
      <Project />
      <div className="container">
        <div className={styles.line}></div>
      </div>
      <Project />
    </div>
  );
};

export default Projects;
