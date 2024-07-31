import React, { useContext } from "react";
import "./style.css";
import { FaBold, FaImage, FaLink } from "react-icons/fa";
import { BiItalic } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { FaMountainSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PageContext } from "../App";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";

const Toolbar = () => {
  const { text, setText, theme, setTheme, PreviewDisplay, setPreviewDisplay } =
    useContext(PageContext);

  const addText = (newText) => setText(text + "\n" + newText);

  return (
    <div
      className="toolbar"
      style={{ background: theme === "dark" ? "#2c3644" : "#fff" }}
    >
      <div className="input-set">
        <button onClick={() => addText("**bold text here**")}>
          <FaBold />
        </button>
        <button onClick={() => addText("![image Alt](image-url)")}>
          <FaImage />
        </button>
        <button onClick={() => addText("[link name](example-link)")}>
          <FaLink />
        </button>
        <button onClick={() => addText("*italic text here*")}>
          <BiItalic />
        </button>
        <button onClick={() => addText("# H1")}>
          <LuHeading1 />
        </button>
        <button onClick={() => addText("## H1")}>
          <LuHeading2 />
        </button>
        <button onClick={() => addText("### H1")}>
          <LuHeading3 />
        </button>
        <button onClick={() => setText("")}>
          <VscDebugRestart />
        </button>
      </div>
      <div className="page-set">
        <button onClick={() => setPreviewDisplay(!PreviewDisplay)}>
          {PreviewDisplay ? "Hide preview" : "Show preview"}
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <FaMountainSun /> : <BsFillMoonStarsFill />}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
