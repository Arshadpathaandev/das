import React, { useState, Fragment } from "react";
import { Dropdown } from "react-bootstrap";
import Blank from "../../../pages/Blank";
import OverLay from "../../../components/modalComponent/OverLay";

const OverlayDropdown = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("top");
  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };
  return (
    <>
      <Dropdown className="colortheme-button p-0">
        <Dropdown.Toggle
          id="dropdown-basic"
          bsPrefix="custom-toggle"
          className="p-0"
        >
          <i
            class="fa fa-stethoscope"
            // onClick={() => show("top")}
            aria-hidden="true"
          ></i>
        </Dropdown.Toggle>

        <Dropdown.Menu className="p-0">
          <Dropdown.Item onClick={() => show("top ")}>Component 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <OverLay
        visible={visible}
        setVisible={setVisible}
        position={position}
        setPosition={setPosition}
      >
      <Blank />
      </OverLay>
    </>
  );
};

export default OverlayDropdown;
