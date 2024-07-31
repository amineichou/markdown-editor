import React, { useContext } from "react";
import "./style.css";
import { PageContext } from "../App";

const Footer = () => {
  const { theme } = useContext(PageContext);
  return (
    <div
      className="footer"
      style={{ background: theme === "dark" ? "#2c3644" : "#fff" }}
    >
      by
      <a href="amine-ichou.web-app">amine ichou</a>
    </div>
  );
};

export default Footer;
