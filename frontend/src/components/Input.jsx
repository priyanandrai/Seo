import React from "react";

const Input = ({
  type,
  name,
  placeholder,
  tabindex,
  autocomplete,
  disabled,
  value,
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      tabIndex={tabindex}
      autoComplete={autocomplete}
      disabled={disabled}
      value={value}
      {...rest}
    />
  );
};

export default Input;
