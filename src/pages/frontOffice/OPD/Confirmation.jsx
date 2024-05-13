import React from "react";
import ReactSelect from "../../../components/formComponent/ReactSelect";
import { useTranslation } from "react-i18next";
import Heading from "../../../components/UI/Heading";
import Input from "@app/components/formComponent/Input";
import DatePicker from "../../../components/formComponent/DatePicker";

const Confirmation = () => {
  const [t] = useTranslation();
  return (
    <>
      <div className="card patient_registration border">
        <Heading title={t("FrontOffice.OPD.Confirmation.label.Confirmation")} />
        <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 g-4 m-2">
          <ReactSelect
            placeholderName={t("FrontOffice.Re_Print.label.Bill")}
            id={"Title"}
            searchable={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          {/* <Input
            type="date"
            className="form-control"
            id="  "
            name="FromDate"
            lable={t("FrontOffice.OPD.Confirmation.label.FromDate")}
            placeholder=" "
            required={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
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
              lable={t("datePickerComponent.DatePicker")}
              placeholder="DD/MM/YYYY"
            />
          <ReactSelect
            placeholderName={t("FrontOffice.OPD.Confirmation.label.Status")}
            id={"Status"}
            searchable={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <Input
            type="text"
            className="form-control"
            id="AppointmentNo"
            name="AppointmentNo"
            lable={t("FrontOffice.OPD.Confirmation.label.AppointmentNo")}
            placeholder=" "
            required={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <ReactSelect
            placeholderName={t(
              "FrontOffice.OPD.Confirmation.label.PatientType"
            )}
            id={"Status"}
            searchable={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <Input
            type="text"
            className="form-control"
            id="PatientName"
            name="patientname"
            lable={t("FrontOffice.OPD.Confirmation.label.PatientName")}
            placeholder=" "
            required={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />

          <ReactSelect
            placeholderName={t(
              "FrontOffice.OPD.Confirmation.label.Specialization"
            )}
            id={"Status"}
            searchable={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />
          <ReactSelect
            placeholderName={t("FrontOffice.OPD.Confirmation.label.DoctorName")}
            id={"Status"}
            searchable={true}
            respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          />

          <div className="col-md-1 col-sm-1 col-12 d-flex  justify-content-around">
            <button className="btn btn-sm btn-info ">
              {t("FrontOffice.OPD.Confirmation.label.Search")}
            </button>
            <button className="btn btn-sm btn-info ">
              {t("FrontOffice.OPD.Confirmation.label.Report")}
            </button>
          </div>
        </div>
      </div>
      <div className="card patient_registration border">
        <div className="row m-2">
          <div className="col-sm-2 d-flex">
            <div className="statusConfirmed"></div>
            <label className="text-dark ml-2">Confirmed</label>
          </div>
          <div className="col-sm-2 d-flex">
            <div className="statusRescheduled"></div>
            <label className="text-dark ml-2">Rescheduled</label>
          </div>
          <div className="col-sm-2 d-flex">
            <div className="statusPending"></div>
            <label className="text-dark ml-2">Pending</label>
          </div>
          <div className="col-sm-2 d-flex">
            <div className="statusAppointment"></div>
            <label className="text-dark ml-2">Apt Time Expired</label>
          </div>
          <div className="col-sm-2 d-flex">
            <div className="statusCanceled"></div>
            <label className="text-dark ml-2">Canceled</label>
          </div>
          <div className="col-sm-2 d-flex">
            <div className="statusUnregistered"></div>
            <label className="text-dark ml-2">Unregistered</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
