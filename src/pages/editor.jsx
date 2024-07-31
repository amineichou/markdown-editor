import React, { useContext } from "react";
import { PageContext, defaultText } from "../App";
import "./styles.css";

const Editor = () => {
  const { text, setText } = useContext(PageContext);

  return (
    <div className="editor">
      <h1>Editor</h1>
      <textarea
        name="editor"
        id="editor"
        defaultValue={defaultText}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
      </textarea>
    </div>
  );
};

export default Editor;
