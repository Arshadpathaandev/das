import React, { useState } from "react";
import ReactSelect from "@app/components/formComponent/ReactSelect";
import Input from "@app/components/formComponent/Input";
import { Tabfunctionality } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import UploadImage from "./UploadImage";
import Modal from "../modalComponent/Modal";
import ReferedDoctorModal from "../modalComponent/Utils/ReferedDoctorModal";
import OldPatientSearch from "../modalComponent/Utils/OldPatientSearch";
import DatePicker from "../../components/formComponent/DatePicker";
export default function PersonalDetails() {
  const [visible, setVisible] = useState(false);
  const [isOpenOldpatient, setIsOpenOldpatient] = useState(false);

  const [t] = useTranslation();

  return (
    <>
      <div className="row p-2">
        <div className="d-md-none">
          <UploadImage />
        </div>
        <div className="col-md-10 col-sm-12 ">
          <div className="row">
            <Input
              type="text"
              className="form-control required-fields"
              id="Barcode"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.Barcode")}
              placeholder=" "
              required={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
              onKeyDown={Tabfunctionality}
            />

            <Input
              type="text"
              className="form-control required-fields"
              id="Visit_ID"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.Visit_ID")}
              placeholder=" "
              required={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
              onKeyDown={Tabfunctionality}
            />

            <Input
              type="text"
              className="form-control required-fields"
              id="UHID"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.UHID")}
              placeholder=" "
              required={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
              onKeyDown={Tabfunctionality}
            />

            <Input
              type="text"
              className="form-control"
              id="Mobile_No"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.Mobile_No")}
              placeholder=" "
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            />

            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="row">
                <ReactSelect
                  placeholderName={t(
                    "FrontOffice.OPD.patientRegistration.Title"
                  )}
                  id={"Title"}
                  searchable={true}
                  respclass="col-5"
                  // className={"required-fields"}
                  // required={true}
                  onKeyDown={Tabfunctionality}
                />

                <Input
                  type="text"
                  className="form-control"
                  id="First_Name"
                  name="barcode"
                  lable={t("FrontOffice.OPD.patientRegistration.First_Name")}
                  placeholder=" "
                  respclass="col-7"
                />
              </div>
            </div>

            <Input
              type="text"
              className="form-control"
              id="Last_Name"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.Last_Name")}
              placeholder=" "
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            />

            <ReactSelect
              placeholderName={t("FrontOffice.OPD.patientRegistration.Gender")}
              id="Gender"
              searchable={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            />

            <DatePicker
              className="custom-calendar"
              id="DOB"
              name="DOB"
              lable={t("datePickerComponent.DatePicker")}
              placeholder="DD/MM/YYYY"
            />

            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="row">
                <Input
                  type="text"
                  className="form-control"
                  id="age"
                  name="barcode"
                  lable={t("FrontOffice.OPD.patientRegistration.Age")}
                  placeholder=" "
                  respclass="col-5"
                />

                <ReactSelect
                  placeholderName={t(
                    "FrontOffice.OPD.patientRegistration.Type"
                  )}
                  id="Type"
                  searchable={true}
                  respclass="col-7"
                />
              </div>
            </div>
            <Input
              type="text"
              className="form-control required-fields"
              id="Email_Address"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.email")}
              placeholder=" "
              required={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
              onKeyDown={Tabfunctionality}
            />

            <ReactSelect
              placeholderName={t(
                "FrontOffice.OPD.patientRegistration.Marital_Status"
              )}
              id="Marital_Status"
              searchable={true}
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            />

            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="row">
                <ReactSelect
                  placeholderName="ID"
                  searchable={true}
                  id={"ID"}
                  respclass="col-6"
                />
                <Input
                  type="text"
                  className="form-control"
                  id="ID_Proof_No"
                  name="barcode"
                  lable={t("FrontOffice.OPD.patientRegistration.ID_Proof_No")}
                  placeholder=" "
                  respclass="col-6"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div class="form-group">
                <textarea
                  className="form-control"
                  placeholder=" "
                  id="Local_Address"
                ></textarea>
                <label for="Local_Address" className="lable truncate">
                  {t("FrontOffice.OPD.patientRegistration.Local_Address")}
                </label>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="Perma_Address"
                  placeholder=" "
                  rows="10"
                  cols="5"
                ></textarea>
                <label htmlFor="Perma_Address" className="lable truncate">
                  {t("FrontOffice.OPD.patientRegistration.Perma_Address")}
                  Perma. Address
                </label>
              </div>
            </div>
            <ReactSelect
              placeholderName={t("FrontOffice.OPD.patientRegistration.Country")}
              searchable={true}
              id="Country"
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            />

            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="box-size">
                <div className="box-upper">
                  <ReactSelect
                    placeholderName={t(
                      "FrontOffice.OPD.patientRegistration.State"
                    )}
                    searchable={true}
                    respclass=""
                    id="State"
                  />
                </div>
                <div className="box-inner">
                  <button className="btn btn-sm btn-primary">
                    <i className="fa fa-plus-circle fa-sm new_record_pluse"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="box-size">
                <div className="box-upper">
                  <ReactSelect
                    placeholderName={t(
                      "FrontOffice.OPD.patientRegistration.District"
                    )}
                    searchable={true}
                    respclass=""
                    id="District"
                  />
                </div>
                <div className="box-inner">
                  <button
                    className="btn btn-sm btn-primary"
                    // onClick={() => {
                    //   setVisible(true);
                    // }}
                    // onClick={() => setVisible1(true)}
                    type="button"
                  >
                    <i className="fa fa-plus-circle fa-sm new_record_pluse"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="box-size">
                <div className="box-upper">
                  <ReactSelect
                    placeholderName={t(
                      "FrontOffice.OPD.patientRegistration.City"
                    )}
                    searchable={true}
                    respclass=""
                    id="City"
                  />
                </div>
                <div className="box-inner">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setVisible(true)}
                    type="button"
                  >
                    <i className="fa fa-plus-circle fa-sm new_record_pluse"></i>
                  </button>
                </div>
              </div>
            </div>

            <Input
              type="text"
              className="form-control"
              id="PID"
              name="barcode"
              lable="PID"
              placeholder=" "
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            />

            <Input
              type="text"
              className="form-control"
              id="Reference_ID"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.Reference_ID")}
              placeholder=" "
              respclass="col-xl-3 col-md-4 col-sm-6 col-12"
            />
          </div>
        </div>
        <div className="col-2 d-none d-md-block">
          <div>
            <button
              className="btn btn-primary btn-sm  btn-block"
              type="button"
              onClick={() => setIsOpenOldpatient(true)}
            >
              {t("FrontOffice.OPD.patientRegistration.OldPatient")}
            </button>
            <div style={{ width: "70%", margin: "auto" }}>
              <img
                src="http://itd2.fw.ondgni.com/Hospedia9.1/Images/no-avatar.gif"
                className="img-fluid"
                alt="Responsive image"
              />
            </div>

            <button
              className="btn btn-primary btn-sm  btn-block mt-1"
              type="button"
            >
              {/* 0 Document's{" "} */}
              {t("FrontOffice.OPD.patientRegistration.ducument", {
                quantity: "0",
              })}
            </button>
          </div>
        </div>
      </div>
      {visible && (
        <Modal visible={visible} setVisible={setVisible}>
          <ReferedDoctorModal />
        </Modal>
      )}
      {isOpenOldpatient && (
        <Modal
          visible={isOpenOldpatient}
          setVisible={setIsOpenOldpatient}
          header={"Old Patient Search"}
        >
          <OldPatientSearch />
        </Modal>
      )}
    </>
  );
}
