import React from "react";
import "./style.css";
import { FaBold, FaImage, FaLink } from "react-icons/fa";
import { BiItalic } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { FaMountainSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Toolbar = () => {
  return (
    <div className="toolbar">
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
        <button>
          {/* <FaMountainSun /> */}
          <BsFillMoonStarsFill />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
