import i18n from "@app/utils/i18n";
import React, { useState } from "react";
import ReactSelect from "../formComponent/ReactSelect";
import Button from "../formComponent/Button";
import { AutoComplete } from "primereact/autocomplete";

function TestPayment() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  const [selectedValue, setSelectedValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (e) => {
    setSelectedValue(e.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="card m-2 patient_registration_card">
      <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 g-4 p-2">
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <ReactSelect
              placeholderName={i18n.t("FrontOffice.OPD.testPayment.label.Type")}
              id="PanelGroup"
              searchable={true}
            />
          </div>
        </div>
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <ReactSelect
              placeholderName={i18n.t(
                "FrontOffice.OPD.testPayment.label.Category"
              )}
              id="Panel"
              searchable={true}
            />
          </div>
        </div>
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <ReactSelect
              placeholderName={i18n.t(
                "FrontOffice.OPD.testPayment.label.SubCategory"
              )}
              id="Panel"
              searchable={true}
            />
          </div>
        </div>
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <ReactSelect
              placeholderName={i18n.t(
                "FrontOffice.OPD.testPayment.label.Dispatch_Mode"
              )}
              id="Panel"
              searchable={true}
            />
          </div>
        </div>
        <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <Button
              name={i18n.t("FrontOffice.OPD.testPayment.label.CPOE")}
              className={"btn btn-sm w-100 btn-primary"}
            />
          </div>
        </div>

        <div className="col-xl-2 col-md-2 col-sm-1 col-4">
          <div className="form-group">
            <ReactSelect
              placeholderName={i18n.t(
                "FrontOffice.OPD.testPayment.label.Search"
              )}
              id="Panel"
              searchable={true}
            />
          </div>
        </div>

        <div className="col-xl-6 col-md-4 col-sm-7 col-8">
          <div className="form-group" id="searchtest">
            <AutoComplete
              value={value}
              suggestions={items}
              completeMethod={search}
              className="w-100 "
              id="search"
              onChange={(e) => setValue(e.value)}
            />

            <label htmlFor={"search"} className="lable">
              search test
            </label>
          </div>
        </div>

        <div className="col-xl-2 col-md-3 col-sm-4 col-12">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <Button
                  name={i18n.t("FrontOffice.OPD.testPayment.label.Count")}
                  className={"btn btn-sm w-100 btn-primary"}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <Button
                  name={i18n.t(
                    "FrontOffice.OPD.testPayment.label.LastTokenNumber"
                  )}
                  className={"btn btn-sm w-100 btn-primary"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-md-3 col-sm-4 col-12">
          <div className="form-group">
            <Button
              name={i18n.t("FrontOffice.OPD.testPayment.label.OnlineBooking")}
              className={"btn btn-sm w-100 btn-primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPayment;
