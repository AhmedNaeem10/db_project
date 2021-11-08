import React from "react";

function InputField(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.text}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.holder}
        className={props.className}
        onChange={props.inputChange}
        value={props.value}
      />
    </div>
  );
}

export default InputField;
