import { createContext, useState } from "react";
import "./App.css";
import Editor from "./pages/editor";
import Preview from "./pages/preview";
import Toolbar from "./components/toolbar";

export const PageContext = createContext(null);

export const defaultText = `
# title

[Link to my portfolio](amine-ichou.web.app)

## or maybe some image :

![cat using Ai](https://media.istockphoto.com/id/1361394182/fr/photo/dr%C3%B4le-de-portrait-de-chat-britannique-%C3%A0-poil-court-lair-choqu%C3%A9-ou-surpris.jpg?s=612x612&w=0&k=20&c=gOT14U8un-JYdXHwpPZkybdkjv1p3MBwEYIX07X2thc=)
`;
function App() {
  const [text, setText] = useState(defaultText);
  const [theme, setTheme] = useState("dark");
  const [PreviewDisplay, setPreviewDisplay] = useState(false);

  return (
    <PageContext.Provider
      value={{
        text,
        setText,
        theme,
        setTheme,
        PreviewDisplay,
        setPreviewDisplay,
      }}
    >
      <Toolbar />
      <div className="App" id={theme}>
        <Editor />
        <Preview />
      </div>
    </PageContext.Provider>
  );
}

export default App;
