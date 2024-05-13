import React, { useState } from "react";
import BillingDetails from "@app/components/front-office/BillingDetails";
import PersonalDetails from "@app/components/front-office/PersonalDetails";
import OtherDetails from "@app/components/front-office/OtherDetails";
import Confirm from "../../../components/modalComponent/Confirm";
import TestPayment from "@app/components/front-office/TestPayment";
import Accordion from "../../../components/UI/Accordion";
import { useTranslation } from "react-i18next";
import TestAddingTable from "../../../components/UI/customTable/frontofficetables/TestAddingTable";
import PaymentGateway from "../../../components/front-office/PaymentGateway";

export default function OPDServiceBooking() {
  const [visible1, setVisible1] = useState(false);
  const [t] = useTranslation();
  return (
    <>
      <form className="patient_registration">
     
        <Accordion
          title={t("FrontOffice.OPD.Personal_Details")}
          defaultValue={true}
        >
          <PersonalDetails />
        </Accordion>
        <Accordion
          title={t("FrontOffice.OPD.patientRegistration.Other")}
          defaultValue={false}
        >
          <OtherDetails />
        </Accordion>
        <Accordion
          title={t("FrontOffice.OPD.Billing_Details")}
          defaultValue={false}
        >
          <BillingDetails Panel={"Cash"} isDipartment={true} />
        </Accordion>
        <TestPayment />
        <TestAddingTable />
        <PaymentGateway />
      </form>

      <Confirm
        visible={visible1}
        setVisible={setVisible1}
        data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum facilis atque harum autem esse perspiciatis, itaque veritatis natus eos. Tempora dolores animi aliquid laudantium nobis amet minima facilis suscipit!"
      />
    </>
  );
}
