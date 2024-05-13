import React, { useState } from "react";
import Tables from "..";
import Modal from "../../../modalComponent/Modal";
import SlotModal from "../../../modalComponent/Utils/SlotModal";

function TestAddingTable() {
  const [modalData, setModalData] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null); // Track selected row index
  const [bodyData, setBodyData] = useState([
    {
      "S.no": 1,
      testCode: "123",
      as: "Asdas",
      input: 0,
      select: 0,
      Remarks: 1,
      Rate: 1,
      Qty: 1,
      "Dis(%)": 2,
      "Dis. Amt.": 2,
      Amount: 3,
      u: 3,
      "": "",
    },
    {
      "S.no": 2,
      testCode: "123",
      as: "Asdas",
      input: 0,
      select: 0,
      Remarks: 1,
      Rate: 1,
      Qty: 1,
      "Dis(%)": 2,
      "Dis. Amt.": 2,
      Amount: 3,
      u: 3,
      "": "",
    },
  ]);

  const THEAD = [
    "Slot",
    "Type",
    "Code",
    "value",
    "Item Name",
    "Doctor",
    "Remarks",
    "Rate",
    "Qty.",
    "Dis(%)",
    "Dis. Amt.",
    "Amount",
    "u",
  ];

  const handleChange = (e, index, name) => {
    const { value } = e.target;
    const data = [...bodyData];
    data[index][name] = value;
    setBodyData(data);
  };

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
    setModalData(true);
  };

  console.log(bodyData)

  return (
    <>
      <Tables
        thead={THEAD}
        tbody={bodyData.map((row, index) => ({
          ...row,
          "S.no": (
            <div onClick={() => handleRowClick(index)}>{row["S.no"]}</div>
          ),
          input: (
            <input
              value={row.input}
              onChange={(e) => handleChange(e, index, "input")}
              name="input"
              className="form-control"
            />
          ),
          select: (
            <select
              value={row.select}
              onChange={(e) => handleChange(e, index, "select")}
              name="select"
             
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          ),
        }))}
      />
      {modalData && (
        <Modal visible={modalData} setVisible={setModalData}>
          {selectedRowIndex !== null && (
            <div>
              <SlotModal />
            </div>
          )}
        </Modal>
      )}
    </>
  );
}

export default TestAddingTable;
