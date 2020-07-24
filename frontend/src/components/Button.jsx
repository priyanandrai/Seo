import React from "react";

const Button = ({ type, value, disabled, ...rest }) => {
  console.log(rest);
  return (
   
    <button type={type} disabled={disabled} {...rest}>
      {value}
    </button>
  );
};

export default Button;
