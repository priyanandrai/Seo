import React from "react";

const Label = ({ value, required, ...rest }) => {
  return (
    <label {...rest}>
      {value} {required && required === true && <span>*</span>}
    </label>
  );
};

export default Label;
