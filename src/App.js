import { createContext, useState } from "react";
import "./App.css";
import Editor from "./pages/editor";
import Preview from "./pages/preview";
import Toolbar from "./components/toolbar";
import Footer from "./components/footer";

export const PageContext = createContext(null);

export const defaultText = `
# Welcome to Markdown editor

## Use Headlines
# H1
## H2
### H3

**bold text**
*italicized text*


line

---

[Or a Link to my portfolio](amine-ichou.web.app)

## a cat image maybe ?

![cat image from istockphoto](https://media.istockphoto.com/id/1361394182/fr/photo/dr%C3%B4le-de-portrait-de-chat-britannique-%C3%A0-poil-court-lair-choqu%C3%A9-ou-surpris.jpg?s=612x612&w=0&k=20&c=gOT14U8un-JYdXHwpPZkybdkjv1p3MBwEYIX07X2thc=)

**try writing some javascript code**

\`\`\`js
var name = "amine ichou";

console.log("My name is " + name);
\`\`\`

*or some* **c**

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("hello world\\n");
}
\`\`\`

*go compile it*

\`\`\`bash
cc file.c -o output
\`\`\`

*run it*

\`\`\`bash
./output
\`\`\`
`;
function App() {
  const [text, setText] = useState(defaultText);
  const [theme, setTheme] = useState("light");
  const [PreviewDisplay, setPreviewDisplay] = useState(true);

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
      {/* <Footer /> */}
    </PageContext.Provider>
  );
}

export default App;
