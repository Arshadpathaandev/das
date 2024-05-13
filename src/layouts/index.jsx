import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarMenu } from "@app/store/reducers/ui";
import { addWindowClass, removeWindowClass, sleep } from "@app/utils/helpers";
import ControlSidebar from "@app/layouts/control-sidebar/ControlSidebar";
import Header from "@app/layouts/header/Header";
import MenuSidebar from "@app/layouts/menu-sidebar/MenuSidebar";
import Footer from "@app/layouts/footer/Footer";

const Index = (props) => {
  const dispatch = useDispatch();

  const menuSidebarCollapsed = useSelector(
    (state) => state.ui.menuSidebarCollapsed
  );
  const controlSidebarCollapsed = useSelector(
    (state) => state.ui.controlSidebarCollapsed
  );
  const screenSize = useSelector((state) => state.ui.screenSize);

  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  useEffect(() => {
    removeWindowClass("register-page");
    removeWindowClass("login-page");
    removeWindowClass("hold-transition");
    addWindowClass("sidebar-mini");
    return () => {
      removeWindowClass("sidebar-mini");
    };
  }, []);

  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    if (menuSidebarCollapsed && screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (menuSidebarCollapsed && screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!menuSidebarCollapsed && screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [screenSize, menuSidebarCollapsed]);

  useEffect(() => {
    if (controlSidebarCollapsed) {
      removeWindowClass("control-sidebar-slide-open");
    } else {
      addWindowClass("control-sidebar-slide-open");
    }
  }, [screenSize, controlSidebarCollapsed]);

  const getAppTemplate = useCallback(() => {
    return (
      <>
        <Header />
        <MenuSidebar />
        <div className="content-wrapper p-1">{props.children}</div>
        <Footer />
        <ControlSidebar />
        <div
          id="sidebar-overlay"
          role="presentation"
          onClick={handleToggleMenuSidebar}
          onKeyDown={() => {}}
        />
      </>
    );
  }, [props.children]);

  return <div className="wrapper">{getAppTemplate()}</div>;
};

export default Index;
