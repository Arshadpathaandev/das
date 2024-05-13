import React from "react";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/Divider";
import SaveButton from "@components/UI/SaveButton";
import CancelButton from "../UI/CancelButton";
import useLocalStorage from '@app/utils/hooks/useLocalStorage';

const Modal = ({setVisible, visible,children,Header}) => {

  const isMobile = window.innerWidth <= 768;
  const [theamClass, setTheamClass] =useLocalStorage('theme', "blue_theme");
  return (
    
    <>
      <Dialog
        header={Header}
        visible={visible}
        style={{ width: isMobile ? "90vw" : "70vw",}}
        onHide={() => setVisible(false)}
        draggable={false}
        className={theamClass}
      >
      <Divider className={`custom-divider-header ${theamClass}`}/>

        <p className={`mt-0 ${theamClass}`}>
          {children}
        </p>

        <Divider className={`custom-divider-footer  ${theamClass}`} />
        <div className="ftr_btn">
          
        
          <SaveButton btnName={"save"} />
          <CancelButton cancleBtnName={"cancel"}  />
         
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
