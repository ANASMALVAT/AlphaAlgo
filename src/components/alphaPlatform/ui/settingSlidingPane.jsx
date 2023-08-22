import React from "react";
import ReactSlidingPane from "react-sliding-pane";
import EditorSetting from "./editorSettings";

import "../styles/slidingPane.css";

const SettingSlidingPane = ({ isOpen, onRequestClose, theme, themeOptions,handleThemeChange}) => {
  return (
    <ReactSlidingPane
      title="Editor's Setting"
      className="slidingPane"
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      from="left"
      width="20%"
      minWidth="400px"
      >
        <EditorSetting theme={theme} themeOptions={themeOptions} handleThemeChange={handleThemeChange}/>
    </ReactSlidingPane>
  );
};

export default SettingSlidingPane;