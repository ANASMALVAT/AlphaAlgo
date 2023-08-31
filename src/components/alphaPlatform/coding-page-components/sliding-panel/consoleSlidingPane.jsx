import React from "react";
import ReactSlidingPane from "react-sliding-pane";
import "./styles/slidingPane.css";
import ConsoleSlidingPaneOptions from "../ui/consoleSlidingPaneOptions";

const ConsoleSlidingPane = ({ isOpen, onRequestClose}) => {
  return (
    <ReactSlidingPane
      title={
        <div className="flex flex-row items-center ">
                <h1 className="logo-name font-mono tracking-wide font-semibold antialiased text-white text-md">A</h1>
                <h1 className="logo font-mono tracking-wide font-semibold antialiased text-[#4C5ADF] text-xl hover:duration-300 hover:scale-125">X</h1>
                <h1 className="logo-name font-mono tracking-wide font-semibold antialiased text-white text-md">A</h1>
        </div>
      }
      className="slidingPane"
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      from="right"
      width="20%"
      minWidth="400px"
      >

        <ConsoleSlidingPaneOptions/>

    </ReactSlidingPane>
  );
};

export default ConsoleSlidingPane;