import React from 'react'
import Accordion from '@app/components/UI/Accordion'
import PersonalDetails from "@app/components/front-office/PersonalDetails";
import BillingDetails from "@app/components/front-office/BillingDetails";
import { useTranslation } from 'react-i18next';
import OtherDetails from '@app/components/front-office/OtherDetails';
import TestPayment from '../../../components/front-office/TestPayment';
import TestAddingTable from '../../../components/UI/customTable/frontofficetables/TestAddingTable';
import PaymentGateway from '../../../components/front-office/PaymentGateway';

export default function Index() {
    const [t] = useTranslation();
  return (
    <form className="patient_registration">
        <Accordion title={t("FrontOffice.OPD.Personal_Details")}  defaultValue={true}>
          <PersonalDetails />
        </Accordion>
        <Accordion
          title={t("FrontOffice.OPD.patientRegistration.Other")}
          defaultValue={false}
        >
          <OtherDetails />
        </Accordion>
        <Accordion title={t("FrontOffice.OPD.Billing_Details")} defaultValue={false}>
          <BillingDetails Panel={'Casha'} isDipartment={false}/>
        </Accordion>

        <TestPayment />
        <TestAddingTable />
        <PaymentGateway />
      </form>
  )
}
