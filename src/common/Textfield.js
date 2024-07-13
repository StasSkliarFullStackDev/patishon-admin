import React from "react";
const Textfiled = (props) => {
  const {
    type = "text",
    className = "form-control",
    placeholder,
    value,
    onChange,
    disabled,
    name,
    label,
    errors,
    helperText,
    click,
    defaultValue,
    maxLength,
    maxNumber = 10000000
  } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        className={className}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        maxLength={maxLength}
        ref={click}
        defaultValue={defaultValue}
        onKeyDown={(e) => {
          if (type === "number")
            if ((e.key === " " && e.target.value.length < 1) || e.key === "+" || e.key === "-" || (!placeholder.toLowerCase().includes("price") && e.key === ".") || e.key == "e"||e.key == "E")  {
              e.preventDefault();
            }
        }}
        onWheel={(e)=>e.target.blur()}
      />
      <>
        {errors ? (
          <span style={{ color: "red", paddingLeft: "5px" }}>{helperText}</span>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default Textfiled;
