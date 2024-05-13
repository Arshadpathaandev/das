import React from "react";
import ReactSelect from "@app/components/formComponent/ReactSelect";
import Input from "@app/components/formComponent/Input";
import { useTranslation } from "react-i18next";
export default function OtherDetails() {
  const [t] = useTranslation();
  return (
    <>
      <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 g-4 p-2">
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="row">
            <Input
              type="text"
              className="form-control"
              id="std_code"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.Code")}
              placeholder=" "
              respclass="col-4"
              value="+91"
            />

            <Input
              type="text"
              className="form-control"
              id="LandLine_No"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.LandLine_No")}
              placeholder=" "
              respclass="col-8"
            />
          </div>
        </div>

        <Input
          type="text"
          className="form-control"
          id="Birth_Place"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Birth_Place")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <ReactSelect
          placeholderName={t("FrontOffice.OPD.patientRegistration.Religion")}
          searchable={true}
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
          id="Religion"
        />

        <ReactSelect
          placeholderName={t("FrontOffice.OPD.patientRegistration.Relation_Of")}
          id="Relation_Of"
          searchable={true}
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="Relation_Name"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Relation_Name")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="Relation_Phone"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Relation_Phone")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="EMG_First_Name"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.EMG_First_Name")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="EMG_Last_Name"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.EMG_Last_Name")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <ReactSelect
          placeholderName={t(
            "FrontOffice.OPD.patientRegistration.EMG_Relation"
          )}
          id="EMG_Relation"
          searchable={true}
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="EMG_Mobile_No"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.EMG_Mobile_No")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="row">
            <Input
              type="text"
              className="form-control"
              id="emg_std_code"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.Code")}
              placeholder=" "
              respclass="col-4"
              value="+91"
            />

            <Input
              type="text"
              className="form-control"
              id="EMG_Resident_No"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.EMG_Resident_No")}
              placeholder=" "
              respclass="col-8"
            />
          </div>
        </div>

        <Input
          type="text"
          className="form-control"
          id="EMG_Address"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.EMG_Address")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <ReactSelect
          placeholderName={t("FrontOffice.OPD.patientRegistration.IsInternational")}
          id="IsInternational"
          searchable={true}
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <ReactSelect
          placeholderName={t("FrontOffice.OPD.patientRegistration.Country")}
          id="Country"
          searchable={true}
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="Locality"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Locality")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="Passport_Number"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Passport_Number")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="International_No"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.International_No")} 
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="Membership_No"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Membership_No")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <ReactSelect
          placeholderName={t("FrontOffice.OPD.patientRegistration.Patient_Type")}
          searchable={true}
          id={"PatientType"}
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <Input
          type="text"
          className="form-control"
          id="Emp_refID"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Emp_refID")} 
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />

        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <textarea
              className="form-control"
              id="Identity_Mark"
              placeholder=" "
            ></textarea>
            <label htmlFor="Identity_Mark" className="lable truncate">
            {t("FrontOffice.OPD.patientRegistration.Identity_Mark")}  
            </label>
          </div>
        </div>
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <textarea
              className="form-control"
              id="Identity_Mark2"
              placeholder=" "
            ></textarea>
            <label htmlFor="Identity_Mark2" className="lable truncate">
            {t("FrontOffice.OPD.patientRegistration.Identity_Mark2")}   
            </label>
          </div>
        </div>
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="row">
            <ReactSelect
              placeholderName={t("FrontOffice.OPD.patientRegistration.Reference_Type")}
              id="ReferenceType"
              searchable={true}
              respclass="col-sm-10 col-lg-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 col-11"
            />
            <button className="btn btn-sm  btn-primary">
              <i className="fa fa-plus-circle fa-sm new_record_pluse"></i>
            </button>
          </div>
        </div>

        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="row">
            <Input
              type="text"
              className="form-control"
              id="MLC_NO"
              name="barcode"
              lable={t("FrontOffice.OPD.patientRegistration.MLC_NO")}
              placeholder=" "
              respclass="col-6"
            />

            <ReactSelect
              placeholderName={t("FrontOffice.OPD.patientRegistration.MLC")}
              id={"MLC"}
              searchable={true}
              respclass="col-6"
            />
          </div>
        </div>
        <Input
          type="text"
          className="form-control"
          id="Remarks"
          name="barcode"
          lable={t("FrontOffice.OPD.patientRegistration.Remarks")}
          placeholder=" "
          respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
        />
      </div>
    </>
  );
}
