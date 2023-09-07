import React from "react";
import Project from "./Project/Project";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div
      id="work"
      style={{
        height: "60rem",
        backgroundColor: "aliceblue",
      }}
      className={styles.projects}
    >
      <Project />
      <div className="container">
        <div className={styles.line}></div>
      </div>
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
