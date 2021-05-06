import React from "react";

const CloudItem = (props) => (
  <div {...props} className="tag-item-wrapper-random-suffix">
    <div>{props.text}</div>
    <div className="tag-item-tooltip-random-suffix">HOVERED!</div>
  </div>
);

export default CloudItem;
