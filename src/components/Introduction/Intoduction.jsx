import React from "react";
import style from "./Introduction.module.css";

const Intoduction = () => {
  return (
    <div className={style.container}>
      <div className={style.animation}>
        <div className={style.square}>
          <div className={style.squareR}></div>
          <div className={style.squareG}></div>
          <div className={style.squareB}></div>
        </div>
        <div className={style.ball}></div>
      </div>
      <div>
        <p>
          <h1>Hello!</h1>
          I'm Ankit, a web developer based in India.
        </p>
      </div>
    </div>
  );
};

export default Intoduction;
