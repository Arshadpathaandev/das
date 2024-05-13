import React, { useState } from "react";
import ReactSelect from "../../formComponent/ReactSelect";
import { useTranslation } from "react-i18next";
import i18n from "@app/utils/i18n";
import Input from "@app/components/formComponent/Input";

const SlotModal = () => {
  const [t] = useTranslation();
  return (
    <>
      <div className="row p-2">
        <div
          className="col-md-2 col-6"
          style={{ height: "300px", overflow: "scroll" }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              zIndex: "1",
            }}
          >
            <h5 className="DateTitle">25-Apr-2024</h5>
            <h5 className="ShiftTitle"># Shif 1</h5>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
          <div className="SlotCard">
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
            <div className="TimeSlotInnerBox">
              <p className="timeSlot">12:00 AM</p>
              <p className="borderSlot"></p>
              <p className="timeSlot">12:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlotModal;
