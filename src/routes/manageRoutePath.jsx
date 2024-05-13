import { lazy } from "react";
import Layout from "@app/layouts";
import Authenticated from "@app/Guard/Authenticated.jsx";
import Guest from "@app/Guard/Guest.jsx";
function manageRoutePath() {
  const allRoutes = [
    {
      Guard: Authenticated,
      layout: Layout,
      path: "/DirectPatientReg",
      component: lazy(
        () => import("@app/pages/frontOffice/PatientRegistration/Index.jsx")
      ),
      exact: true,
    },
    {
      Guard: Authenticated,
      layout: Layout,
      path: "/PatientBlackList",
      component: lazy(
        () =>
          import(
            "@app/pages/frontOffice/PatientRegistration/PatientBlackList.jsx"
          )
      ),
      exact: true,
    },
    {
      Guard: Authenticated,
      layout: Layout,
      path: "/opd-servicebooking",
      component: lazy(
        () => import("@app/pages/frontOffice/OPD/OPDServiceBooking.jsx")
      ),
      exact: true,
    },
    {
      Guard: Authenticated,
      layout: Layout,
      path: "/Confirmation",
      component: lazy(
        () => import("@app/pages/frontOffice/OPD/Confirmation.jsx")
      ),
      exact: true,
    },
    {
      Guard: Authenticated,
      layout: Layout,
      path: "/opd-setellment",
      component: lazy(
        () => import("@app/pages/frontOffice/OPDSetellment/Index.jsx")
      ),
      exact: true,
    },
    {
      Guard: Authenticated,
      layout: Layout,
      path: "/opd-refund",
      component: lazy(() => import("@app/pages/frontOffice/OPD/OPDRefund.jsx")),
      exact: true,
    },
    {
      Guard: Authenticated,
      layout: Layout,
      path: "/opd-advance",
      component: lazy(
        () => import("@app/pages/frontOffice/OPDAdvance/Index.jsx")
      ),
      exact: true,
    },

    {
      Guard: Authenticated,
      layout: Layout,
      path: "/ReceiptReprint",
      component: lazy(
        () => import("@app/pages/frontOffice/Re_Print/ReceiptReprint.jsx")
      ),
      exact: true,
    },

    {
      Guard: Guest,
      path: "/login",
      component: lazy(() => import("@app/modules/login/Login.jsx")),
      exact: true,
    },
    {
      path: "/ForgetPassword",
      component: lazy(() => import("@app/modules/login/ForgetPassword.jsx")),
      exact: true,
    },

    {
      Guard: Authenticated,
      layout: Layout,
      path: "/OpdTriageRoom",
      component: lazy(
        () => import("@app/pages/triageRoom/OPD/OpdTriageRoom.jsx")
      ),
      exact: true,
    },
  ];
  return allRoutes;
}

export default manageRoutePath;
