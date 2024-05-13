import React, { useState } from "react";
import "./Accordion.css"; // Import your CSS file for styling
import Heading from "./Heading";

const Accordion = ({ title, children, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(defaultValue); // State variable to track accordion open/close state

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`card  m-2 patient_registration_card ${isOpen ? "open" : ""}`}
    >
      <Heading title={title} onClick={toggleAccordion} />
      <div className={`collapse ${isOpen ? "show" : ""}`}>{children}</div>
    </div>
  );
};

export default Accordion;
