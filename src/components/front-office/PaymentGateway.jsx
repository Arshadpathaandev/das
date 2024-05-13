import Input from "@app/components/formComponent/Input";
import React from "react";
import { useTranslation } from "react-i18next";

const PaymentGateway = () => {
  const [t] = useTranslation();
  return (
    <>
      {/* <div className="card m-2 patient_registration_card"> */}
      <div className="row ">
        <div className="col-md-7 col-sm-12">
          <div className="card m-2 pt-2">
            <div className="row m-1">
              <Input
                type="text"
                className="form-control "
                id="Currency"
                name="Currency"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Currency")}
                placeholder=" "
                required={true}
                respclass="col-sm-12 col-md-6 "
                // onKeyDown={Tabfunctionality}
              />
              <label className="inrkey m-2">0 INR</label>

              <label className="ml-5">
                {t("FrontOffice.OPD.PaymentGateway.label.Factor")} :
              </label>
              <label className="ml-5">1 INR = 1 INR</label>
            </div>

            <div className="row m-1">
              <label className="mr-2 col-md-12 col-12">
                {t("PaymentMode")} :
              </label>
             
                <input type="checkbox" id="cash" />
                <label htmlFor="cash" className="m-2 ">
                  {t("FrontOffice.OPD.PaymentGateway.label.Cash")}
                </label>
                <input type="checkbox" id="cash" />
                <label htmlFor="cash" className="m-2 ">
                  {t("FrontOffice.OPD.PaymentGateway.label.Check")}
                </label>
                <input type="checkbox" id="cash" />
                <label htmlFor="cash" className="m-2 ">
                  {t("FrontOffice.OPD.PaymentGateway.label.Credit_Card")}
                </label>
                <input type="checkbox" id="cash" />
                <label htmlFor="cash" className="m-2 ">
                  {t("FrontOffice.OPD.PaymentGateway.label.Credit")}
                </label>
                <input type="checkbox" id="cash" />
                <label htmlFor="cash" className="m-2 ">
                  {t("FrontOffice.OPD.PaymentGateway.label.Online_Payment")}
                </label>
                <input type="checkbox" id="cash" />
                <label htmlFor="cash" className="m-2 ">
                  {t("FrontOffice.OPD.PaymentGateway.label.Paytm")}
                </label>
           
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="card m-2 pt-2">
            <div className="row m-1">
              <Input
                type="text"
                className="form-control "
                id="Co-PayPercent"
                name="Co-PayPercent"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Co-Pay_Percent")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="Co-PayAmount"
                name="Co-PayAmount"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Co-Pay_Amount")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="GrossAmount"
                name="GrossAmount"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Gross_Amount")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="NetAmount"
                name="NetAmount"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Net_Amount")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="PatientPayable"
                name="PatientPayable"
                lable={t(
                  "FrontOffice.OPD.PaymentGateway.label.Patient_Payable"
                )}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="PanelPayable"
                name="PanelPayable"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Panel_Payable")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="DiscountAmt"
                name="DiscountAmt"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Discount_Amt")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="PaidAmount"
                name="PaidAmount"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Paid_Amount")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="Discountin"
                name="Discountin"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Discount_in%")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="RoundOff"
                name="RoundOff"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Round_Off")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="CurrencyRound"
                name="CurrencyRound"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Currency_Round")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="BalanceAmount"
                name="BalanceAmount"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Balance_Amount")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="Change"
                name="Change"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Change")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="ReturnAmt"
                name="ReturnAmt"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Return_Amt")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
              <Input
                type="text"
                className="form-control "
                id="Remarks"
                name="Remarks"
                lable={t("FrontOffice.OPD.PaymentGateway.label.Remarks")}
                placeholder=" "
                required={true}
                respclass="col-xl-4 col-sm-6 col-lg-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 col-6 col-12"
                // onKeyDown={Tabfunctionality}
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default PaymentGateway;
