import React from "react";

function Heading({ title, onClick }) {
  return (
    <div className="card card_background">
      <div className="card-header" onClick={onClick}>
        <h4 className="card-title w-100">
          <div className="d-block w-100">{title}</div>
        </h4>
      </div>
    </div>
  );
}

export default Heading;
