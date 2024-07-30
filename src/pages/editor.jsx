import React, { useContext } from "react";
import { TextContext } from "../App";
import "./styles.css";

const Editor = () => {
  const { setText } = useContext(TextContext);

  return (
    <textarea
      className="editor"
      name="editor"
      id="editor"
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export default Editor;
