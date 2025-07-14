import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label === "email"
          ? "Электронная почта"
          : label === "password"
          ? "Пароль"
          : label === "Display Name"
          ? "Имя"
          : label === "Email"
          ? "Электронная почта"
          : label === "Password"
          ? "Пароль"
          : label === "Confirm Password"
          ? "Подтвердите пароль"
          : label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
