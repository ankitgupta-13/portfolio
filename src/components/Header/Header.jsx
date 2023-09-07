import React from "react";
import style from "./Header.module.css";

const Header = () => {
  const handlescroll = () => {
    const element = document.getElementById("work");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.circle}></div>
        <div className={style.left}>Ankit Gupta</div>
      </div>
      <div className={style.right}>
        <ul className={style.sections}>
          <li>Home</li>
          <li>
            <a onClick={handlescroll}>Work</a>
          </li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
