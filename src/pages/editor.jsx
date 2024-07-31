import React, { useContext } from "react";
import { PageContext, defaultText } from "../App";
import "./styles.css";

const Editor = () => {
  const { setText } = useContext(PageContext);

  return (
    <div className="editor">
      <h1>Editor</h1>
      <textarea
        name="editor"
        id="editor"
        value={defaultText}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default Editor;
