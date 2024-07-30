import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { TextContext } from "../App";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import './styles.css';

const Preview = () => {
  const { text } = useContext(TextContext);

  return (
    <div className="preview">
      <ReactMarkdown
      className="in-box"
        children={text}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={github}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Preview;
