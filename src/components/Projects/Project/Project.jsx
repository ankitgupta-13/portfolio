import React from "react";
import style from "./Project.module.css";
import geekers from "../../../assets/geekers.png";
import rightArrow from "../../../assets/right-arrow.svg";

const Project = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1>Geekers</h1>
        </div>
        <div className={style.description}>
          <p>
            The College Coding CMS is a powerful platform designed to meet the
            needs of college students and aspiring developers.
          </p>
          <button className={style.button}>
            <a href="https://geekers.vercel.app/" target="/">
              View Project
            </a>
            <img src={rightArrow} alt="" className={style.logo} />
          </button>
        </div>
      </div>
      <img src={geekers} alt="" className={style.image} />
    </div>
  );
};

export default Project;
