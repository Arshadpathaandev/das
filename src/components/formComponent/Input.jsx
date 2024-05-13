import React from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "primereact/tooltip";

function Input({
  type,
  name,
  className,
  respclass,
  id,
  placeholder,
  lable,
  value,
  onKeyDown,
  required,
  onChange,
}) {
  const [t] = useTranslation();
  return (
    <>
      <Tooltip
        target={`#${id}`}
        position="top"
        content={t(lable)}
        event="focus"
      />

      <div className={respclass}>
        <div className="form-group">
          <input
            type={type}
            className={className}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onKeyDown={onKeyDown}
            onChange={onChange}
            required={required}
          />
          <label htmlFor={id} className="lable truncate">
            {lable}
          </label>
        </div>
      </div>
    </>
  );
}

export default Input;
