import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Heading from "../../UI/Heading";
import { StyledDropdown } from "@app/styles/common";
import { useNavigate } from "react-router-dom";
import Input from "@app/components/formComponent/Input";
import VitalSign from "./VitalSign";

const VitalExaminationModal = () => {
  const [t] = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuExtended, setIsMenuExtended] = useState(false);
  const [isExpandable, setIsExpandable] = useState(false);
  const [isMainActive, setIsMainActive] = useState(false);
  const [isOneOfChildrenActive, setIsOneOfChildrenActive] = useState(false);
  const tabsData = [
    { id: 1, label: "Tab 1", content: "Content of Tab 1" },
    { id: 2, label: "Tab 2", content: "Content of Tab 2" },
    { id: 3, label: "Tab 3", content: "Content of Tab 3" },
  ];

  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="row p-2">
        <div className="col-1">
          <div className="row">
            <div className="col-md-12 ">
              <img
                src="http://itd2.fw.ondgni.com/Hospedia9.1/Images/no-avatar.gif"
                className="emp-img"
                alt="Responsive image"
              />
            </div>
          </div>
        </div>
        <div className="col-md-11 col-sm-12 ">
          <table className="vitalTable">
            <tbody>
              <tr>
                <td className="vital_item">Patient Name :</td>
                <td className="blue_theme .nav-item">sjdhuejo</td>
                <td className="vital_item">Gender :</td>
                <td className="blue_theme .nav-item">Female</td>
                <td className="vital_item">Age :</td>
                <td className="blue_theme .nav-item">22</td>
                <td className="vital_item">App. Date/No :</td>
                <td className="blue_theme .nav-item">10/05/2024</td>
              </tr>
              <tr>
                <td className="vital_item">Corrent Doctor :</td>
                <td className="blue_theme .nav-item">kjhjda</td>
                <td className="vital_item">UHID:</td>
                <td className="blue_theme .nav-item">dfhkf/00/22</td>
                <td className="vital_item">Panel :</td>
                <td className="blue_theme .nav-item">asz/004/333</td>
                <td className="vital_item">Purpose of Visit :</td>
                <td className="blue_theme .nav-item">sdfdf</td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-sm-2">
              <button className="btn btn-sm btn-primary">
                Triage Room OUT
              </button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-sm btn-primary">Back to Search</button>
            </div>
          </div>
        </div>
      </div>
      <Heading title={t("Vital Examination")} />
      <div className="row">
        <div className="col-md-2">
          <div className="tab-list">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-10">
          <VitalSign />
        </div>
      </div>
    </>
  );
};

export default VitalExaminationModal;
