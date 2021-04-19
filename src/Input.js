import React from "react";

function ConvertInput(props) {
  return (
    <input
      className="input"
      onChange={props.onChange}
      maxLength="4"
    />
  );
}

export default ConvertInput;
