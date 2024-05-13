import React, { useState } from "react";
import Accordion from "../../../components/UI/Accordion";
import { useTranslation } from "react-i18next";
import OPDSearchSetellment from "../../../components/front-office/OPDSearchSetellment";
import TestAddingTable from "../../../components/UI/customTable/frontofficetables/TestAddingTable";

export default function Index() {
  const [visible1, setVisible1] = useState(false);
  const [t] = useTranslation();
  return (
    <>
      <form className="patient_registration">
        <Accordion
          title={t("FrontOffice.OPD.Personal_Details")}
          defaultValue={true}
        >
          <OPDSearchSetellment />
        </Accordion>

        <TestAddingTable />
      </form>
    </>
  );
}
