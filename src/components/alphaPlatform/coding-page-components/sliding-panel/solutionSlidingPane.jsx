import React from "react";
import ReactSlidingPane from "react-sliding-pane";
import SolutionLayout from "../ui/solutionLayout";
import "./styles/slidingPane.css";

const SlidingPane = ({ isOpen, onRequestClose }) => {
  return (

    <ReactSlidingPane
      title="Solution"
      className="slidingPane" // Increase the z-index and position the sliding pane absolutely
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      from="right"
      width="45%"
      minWidth="450px" >
      <SolutionLayout/>
    </ReactSlidingPane>
  );
};

export default SlidingPane;