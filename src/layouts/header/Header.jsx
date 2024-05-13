import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarMenu } from "@app/store/reducers/ui";
import NotificationsDropdown from "@app/layouts/header/notifications-dropdown/NotificationsDropdown";
import LanguagesDropdown from "@app/layouts/header/languages-dropdown/LanguagesDropdown";
import Themedropdown from "@app/layouts/header/Theme-dropdown";
import { toggleFullScreen } from "../../utils/helpers";
import ReactSelect from "../../components/formComponent/ReactSelect";
import SubMenuDropdown from "@app/layouts/header/submenu-dropdown/SubMenuDropdown";
import OverLay from "../../components/modalComponent/OverLay";
import OverlayDropdown from "./overlay-dropdown";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/utils";
import { GetRoleListByEmployeeIDAndCentreID } from "../../store/reducers/getRoleListSlice";


const Header = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const navbarVariant = useSelector((state) => state.ui.navbarVariant);
  const headerBorder = useSelector((state) => state.ui.headerBorder);
  const getRoleList = useSelector((state)=> state.getRoleListSlice)
  console.log(getRoleList);
  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  const getContainerClasses = useCallback(() => {
    let classes = `main-header navbar navbar-expand ${navbarVariant}`;
    if (headerBorder) {
      classes = `${classes} border-bottom-0`;
    }
    return classes;
  }, [navbarVariant, headerBorder]);

  const logOut = ()=>{
    localStorage.clear()
    navigate("/login")
    notify("Sucessfully logout", "success")
  }
  // const userData = JSON.parse(localStorage.getItem("userData"));
  const [userData, setUserData] = useState(null);

  // console.log(userData);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      const { CentreID, EmployeeID } = parsedUserData[0];
      console.log(CentreID, EmployeeID);
      dispatch(GetRoleListByEmployeeIDAndCentreID({ CentreID, EmployeeID }));
    } else {
      console.log("User data not found in localStorage");
    }
  }, [dispatch]);
  return (
    <>
      <nav className={getContainerClasses()}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              onClick={handleToggleMenuSidebar}
              type="button"
              className="nav-link"
            >
              <i className="fas fa-bars" />
            </button>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button type="button" className="nav-link headerboxsize">
              <ReactSelect
                placeholderName="Centre"
                searchable={true}
                respclass="roll-off"
              />
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link headerboxsize">
              <ReactSelect
                placeholderName="Role"
                searchable={true}
                respclass="roll-off"
              />
            </button>
          </li>
        </ul>
        <ul className="navbar-nav  d-md-none">
          <li className="nav-item">
            <button type="button" className="nav-link">
              {/* <i class="fa fa-ellipsis-v" aria-hidden="true"></i> */}
              <SubMenuDropdown />
            </button>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto d-none d-md-flex">
          <li className="nav-item">
            <Themedropdown />
          </li>
          {/* <li className="nav-item">
          <OverLay />
          </li> */}
          <li className="nav-item">
            <button type="button" className="nav-link">
              <i class="fa fa-solid fa-star"></i>
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link">
              <i class="fa fa-home" aria-hidden="true"></i>
            </button>
          </li>
          <NotificationsDropdown />

          <LanguagesDropdown />

          <li className="nav-item d-none d-sm-block">
            <button type="button" className="nav-link d-flex">
              <i class="fa fa-solid fa-user"></i>
              <label className="control-label ml-1 d-none d-lg-block">
                itd-Priyam
              </label>
            </button>
          </li>
          <li className="nav-item d-none d-sm-block">
            <button type="button" className="nav-link p-0 " >
            {/* <OverLay /> */}
            <OverlayDropdown />
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={toggleFullScreen}
            >
              <i class="fa fa-arrows-alt" aria-hidden="true"></i>
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link" onClick={logOut}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </li>
          {/* <li className="nav-item">
          <button
            type="button"
            className="nav-link"
            onClick={handleToggleControlSidebar}
          >
            <i className="fas fa-th-large" />
          </button>
        </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Header;
