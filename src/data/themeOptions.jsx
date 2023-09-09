import { loader } from "@monaco-editor/react";

export const monacoThemes = {
  active4d: "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  amy: "Amy",
  "oceanic-next": "Oceanic Next",
};

const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export { defineTheme };
