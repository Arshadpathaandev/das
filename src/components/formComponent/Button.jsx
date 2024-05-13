import React from "react";

function Button({ name, type, className }) {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  );
}

export default Button;
