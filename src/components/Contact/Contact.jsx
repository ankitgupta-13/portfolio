import React from "react";
import linkedIn from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className="right">
        <h1>Let's Connect</h1>
        <div className={style.logos}>
          <img src={linkedIn} alt="" className={style.logo} />
          <img src={github} alt="" className={style.logo} />
          <img src={linkedIn} alt="" className={style.logo} />
        </div>
      </div>
      <div className={style.review}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className={style.input} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={style.input} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input type="text" id="message" className={style.input} />
        </div>
        <button type="submit">Send</button>
      </div>
    </div>
  );
};

export default Contact;
