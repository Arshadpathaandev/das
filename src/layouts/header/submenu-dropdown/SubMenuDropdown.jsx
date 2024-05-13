import React, { useState } from "react";
import SubmenuComponent from "./SubmenuComponent";
import Themedropdown from "@app/layouts/header/Theme-dropdown";
import { toggleFullScreen } from "../../../utils/helpers";
import LanguagesDropdown from "@app/layouts/header/languages-dropdown/LanguagesDropdown";

const SubMenuDropdown = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>

      <i
        class="fa fa-ellipsis-v"
        aria-hidden="true"
        onClick={toggleSidebar}
      ></i>
      <SubmenuComponent isOpen={isSidebarOpen} onClose={toggleSidebar}>
        <ul className="navbar-nav d-block">
          <li className="nav-item">
            <button type="button" className="nav-link ">
              <i className="fa fa-solid fa-star  text-white"></i>
              <label className="control-label text-white ml-4">BookMarks</label>
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link">
              <i className="fa fa-home text-white" aria-hidden="true"></i>
              <label className="control-label text-white ml-4">Home</label>
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link ">
              <i class="fa fa-bell text-white" aria-hidden="true"></i>
              <label className="control-label text-white ml-4">
                Notifications
              </label>
            </button>
          </li>
         
          <li className="nav-item ">
            <button type="button" className="nav-link">
              <i class="fa fa-solid fa-user text-white"></i>
              <label className="control-label text-white ml-4">
                itd-Priyam
              </label>
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={toggleFullScreen}
            >
              <i class="fa fa-arrows-alt text-white" aria-hidden="true"></i>{" "}
              <label className="control-label text-white ml-4">
                FullScreen
              </label>
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={toggleFullScreen}
            >
              <i className="fas fa-sign-out-alt text-white"></i>
              <label className="control-label text-white ml-4">
                Logout
              </label>
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link d-flex justify-content-space-between"
            >
              <LanguagesDropdown />
              <label className="control-label text-white">Languages</label>
            </button>
          </li>
          <li className="nav-item">
            <Themedropdown />
          </li>
        </ul>
      </SubmenuComponent>
    </div>
  );
};

export default SubMenuDropdown;
