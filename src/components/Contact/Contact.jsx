import React from "react";
import linkedIn from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className="right">Let's Connect</div>
      <img src={linkedIn} alt="" className={style.logo} />
      <img src={github} alt="" className={style.logo} />
      <img src={linkedIn} alt="" className={style.logo} />
    </div>
  );
};

export default Contact;
