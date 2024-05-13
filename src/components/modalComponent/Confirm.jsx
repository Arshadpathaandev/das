import React from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

const Confirm = ({setVisible, visible}) => {
  const footer = (
    <div>
      <button
        className="p-button p-button-text p-button-danger"
        onClick={() => {
          setVisible(false);
          // Perform your reject action here
        }}
      >
        No
      </button>
      <button
        className="p-button p-button-text p-button-success"
        onClick={() => {
          setVisible(false);
          // Perform your accept action here
        }}
      >
        Yes
      </button>
    </div>
  );
  return (
    <>
      <ConfirmDialog
        group="declarative"
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        draggable={false}
        footer={footer}
        // accept={accept} // show the toast
        // reject={reject} // show the toast
        
      />
    </>
  );
};

export default Confirm;
