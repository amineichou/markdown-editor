import { createContext, useState } from "react";
import "./App.css";
import Editor from "./pages/editor";
import Preview from "./pages/preview";
import Toolbar from "./components/toolbar";

export const TextContext = createContext(null);

function App() {
  const [text, setText] = useState("");

  return (
    <TextContext.Provider value={{ text, setText }}>
      <Toolbar />
      <div className="App">
        <Editor />
        <Preview />
      </div>
    </TextContext.Provider>
  );
}

export default App;
