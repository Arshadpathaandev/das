import React, { useState } from "react";
import useLocalStorage from "@app/utils/hooks/useLocalStorage";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/Divider";
import CancelButton from "../UI/CancelButton";
import SaveButton from "@components/UI/SaveButton";

const OverLay = ({
  visible,
  setVisible,
  position,
  setPosition,
  children,
  Header,
}) => {
  const [theamClass, setTheamClass] = useLocalStorage("theme", "blue_theme");
  const isMobile = window.innerWidth <= 768;
  return (
    <>
     

      <Dialog
        header={Header}
        visible={visible}
        position={position}
        style={{ width: isMobile ? "90vw" : "95vw", height: "100vh" }}
        onHide={() => setVisible(false)}
        draggable={false}
        resizable={false}
        className={theamClass}
      >
        {children}
        {/* <Divider className={`custom-divider-header ${theamClass}`} />
        <div className="ftr_btn">
          <SaveButton btnName={"save"} />
          <CancelButton cancleBtnName={"cancel"} />
        </div> */}
      </Dialog>
    </>
  );
};

export default OverLay;
