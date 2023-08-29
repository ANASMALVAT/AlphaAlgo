import React from "react";
import ReactSlidingPane from "react-sliding-pane";import "../../styles/slidingPane.css";
import ConsoleSlidingPaneOptions from "../ui/consoleSlidingPaneOptions";
const ConsoleSlidingPane = ({ isOpen, onRequestClose, openEditor,openConsole,openAlphaGPT}) => {
  return (
    <ReactSlidingPane
      title=""
      className="slidingPane"
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      from="right"
      width="20%"
      minWidth="400px"
      >
        <ConsoleSlidingPaneOptions openEditor={openEditor} openConsole={openConsole} openAlphaGPT={openAlphaGPT}/>
    </ReactSlidingPane>
  );
};

export default ConsoleSlidingPane;