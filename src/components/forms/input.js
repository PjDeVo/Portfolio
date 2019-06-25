import React from "react";

const Input = props => {
  return (
    <div>
      <label>{props.title}</label>

      <input
        className={props.className}
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};
export default Input;
