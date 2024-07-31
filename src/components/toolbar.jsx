import React, { useContext } from "react";
import "./style.css";
import { FaBold, FaImage, FaLink } from "react-icons/fa";
import { BiItalic } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { FaMountainSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PageContext } from "../App";

const Toolbar = () => {
  const { theme, setTheme, PreviewDisplay, setPreviewDisplay } =
    useContext(PageContext);

  return (
    <div
      className="toolbar"
      style={{ background: theme === "dark" ? "#484f58" : "#fff" }}
    >
      <div className="input-set">
        <button>
          <FaBold />
        </button>
        <button>
          <FaImage />
        </button>
        <button>
          <FaLink />
        </button>
        <button>
          <BiItalic />
        </button>
        <button>
          <VscDebugRestart />
        </button>
      </div>
      <div className="page-set">
        <button
          onClick={() => {
            setPreviewDisplay(PreviewDisplay ? false : true);
          }}
        >
          {PreviewDisplay ? "hide preview" : "Show preview"}
        </button>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? <FaMountainSun /> : <BsFillMoonStarsFill />}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
