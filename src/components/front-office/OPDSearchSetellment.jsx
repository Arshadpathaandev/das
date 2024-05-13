import React, { useState } from "react";
import ReactSelect from "@app/components/formComponent/ReactSelect";
import Input from "@app/components/formComponent/Input";
import { Tabfunctionality } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import UploadImage from "./UploadImage";
import Modal from "../modalComponent/Modal";
import ReferedDoctorModal from "../modalComponent/Utils/ReferedDoctorModal";
import DatePicker from "../formComponent/DatePicker";
export default function OPDSearchSetellment() {
  const [visible, setVisible] = useState(false);

  const [t] = useTranslation();

  return (
    <>
      <div className="row p-2">
        <div className="col-md-10 col-sm-12 ">
          <div className="row">
            <Input
              type="text"
              className="form-control "
              id="Barcode"
              name="barcode"
              lable={"Barcode/UHID"}
              placeholder=" "
              //   required={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
              onKeyDown={Tabfunctionality}
            />

            <Input
              type="text"
              className="form-control "
              id="Visit_ID"
              name="barcode"
              lable={"Bill No."}
              placeholder=" "
              //   required={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
              onKeyDown={Tabfunctionality}
            />

            <ReactSelect
              placeholderName={"panel"}
              id={"Title"}
              searchable={true}
              respclass="col-3"
              // className={"required-fields"}
              // required={true}
              onKeyDown={Tabfunctionality}
            />

            {/* <Input
              type="date"
              className="form-control"
              id="Mobile_No"
              name="barcode"
              //   lable={t("FrontOffice.OPD.patientRegistration.Mobile_No")}
              placeholder=" "
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            /> */}
            <DatePicker
              className="custom-calendar"
              id="DOB"
              name="DOB"
              lable={t("datePickerComponent.DatePicker")}
              placeholder="DD/MM/YYYY"
            />
            <DatePicker
              className="custom-calendar"
              id="DOB"
              name="DOB"
              lable={t("FrontOffice.OPD.patientRegistration.DOB")}
              placeholder="DD/MM/YYYY"
            />
            {/* <Input
              type="date"
              className="form-control"
              id="Mobile_No"
              name="barcode"
              //   lable={t("FrontOffice.OPD.patientRegistration.Mobile_No")}
              placeholder=" "
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            /> */}
            <ReactSelect
              placeholderName={"Center"}
              id={"Title"}
              searchable={true}
              respclass="col-3"
              // className={"required-fields"}
              // required={true}
              onKeyDown={Tabfunctionality}
            />

            <button className="btn btn-sm btn-primary">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
