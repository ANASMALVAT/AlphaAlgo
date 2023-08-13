import React from "react";
import ReactSlidingPane from "react-sliding-pane";
import ProblemLayout from "./problemLayout";
import "../styles/slidingPane.css";

const SlidingPane = ({ isOpen, onRequestClose }) => {
  return (
    <ReactSlidingPane
      className="slidingPane" // Increase the z-index and position the sliding pane absolutely
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      from="right"
      width="40%"
    >
      <ProblemLayout/>
    </ReactSlidingPane>
  );
};

export default SlidingPane;