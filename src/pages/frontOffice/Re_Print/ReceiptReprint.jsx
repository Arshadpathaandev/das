import React from "react";
import ReactSelect from "../../../components/formComponent/ReactSelect";
import { useTranslation } from "react-i18next";
import Heading from "../../../components/UI/Heading";
import Input from "@app/components/formComponent/Input";
import Tables from "../../../components/UI/customTable";
import DatePicker from "../../../components/formComponent/DatePicker";

const ReceiptReprint = () => {
  const [t] = useTranslation();
  const THEAD = [
    t("FrontOffice.Re_Print.label.Patient Name"),
    t("FrontOffice.Re_Print.label.Address"),
    t("FrontOffice.Re_Print.label.Receipt No"),
    t("FrontOffice.Re_Print.label.Bill No"),
    t("FrontOffice.Re_Print.label.Date"),
    t("FrontOffice.Re_Print.label.Bill Amount"),
    t("FrontOffice.Re_Print.label.Print"),
    t("FrontOffice.Re_Print.label.Original"),
    t("FrontOffice.Re_Print.label.Print"),
  ];
  return (
    <>
      <div className="card patient_registration border">
        <Heading title={t("FrontOffice.Re_Print.label.Receipt Reprint")} />
        <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 g-4 m-2">
          <ReactSelect
            placeholderName={t("FrontOffice.Re_Print.label.Bill")}
            id={"Title"}
            searchable={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <Input
            type="text"
            className="form-control"
            id="ReceiptNo"
            name="receiptno"
            lable={t("FrontOffice.Re_Print.label.ReceiptNo")}
            placeholder=" "
            required={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <Input
            type="text"
            className="form-control"
            id="BillNo"
            name="billno"
            lable={t("FrontOffice.Re_Print.label.BillNo")}
            placeholder=" "
            required={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <Input
            type="text"
            className="form-control"
            id="UHID"
            name="UHID"
            lable={t("FrontOffice.Re_Print.label.UHID")}
            placeholder=" "
            required={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <Input
            type="text"
            className="form-control"
            id="PatientName"
            name="patientname"
            lable={t("FrontOffice.Re_Print.label.PatientName")}
            placeholder=" "
            required={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
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
              lable={t("datePickerComponent.DatePicker")}
              placeholder="DD/MM/YYYY"
            />
          <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
            <button className="btn btn-sm btn-info ">
              {t("FrontOffice.Re_Print.label.Search")}
            </button>
          </div>
        </div>
      </div>
      <Tables thead={THEAD} />
    </>
  );
};

export default ReceiptReprint;
