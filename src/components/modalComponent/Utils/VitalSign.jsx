import React from "react";
import Input from "@app/components/formComponent/Input";
import { useTranslation } from "react-i18next";

const VitalSign = () => {
    const [t] = useTranslation();
  return (
    <>
      <div className="row mt-3">
        
          <Input
            type="date"
            className="form-control"
            id="Date"
            name="Date"
            lable={t("Date")}
            placeholder=" "
            required={true}
            respclass="col-xl-2 col-md-2 col-sm-6 col-12"
            // onKeyDown={Tabfunctionality}
          />
          <Input
            type="time"
            className="form-control"
            id="time"
            name="time"
            lable={t("Time")}
            placeholder=" "
            required={true}
            respclass="col-xl-2 col-md-2 col-sm-6 col-12"
            // onKeyDown={Tabfunctionality}
          />
          <Input
            type="number"
            className="form-control"
            id="BP"
            name="BP"
            lable={t("BP")}
            placeholder=" "
            required={true}
            respclass="col-xl-2 col-md-2 col-sm-6 col-12"
            // onKeyDown={Tabfunctionality}
          />
          <Input
            type="number"
            className="form-control"
            id="BP"
            name="BP"
            lable={t("Pulse")}
            placeholder=" "
            required={true}
            respclass="col-xl-2 col-md-2 col-sm-6 col-12"
            // onKeyDown={Tabfunctionality}
          />
          <Input
            type="number"
            className="form-control"
            id="BP"
            name="BP"
            lable={t("Resp")}
            placeholder=" "
            required={true}
            respclass="col-xl-2 col-md-2 col-sm-6 col-12"
            // onKeyDown={Tabfunctionality}
          />
          <Input
            type="number"
            className="form-control"
            id="Temp"
            name="Temp"
            lable={t("Temp.")}
            placeholder=" "
            required={true}
            respclass="col-xl-1 col-md-1 col-sm-6 col-12"
            // onKeyDown={Tabfunctionality}
          />
       
      </div>
    </>
  );
};

export default VitalSign;
