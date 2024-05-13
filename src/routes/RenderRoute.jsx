import React, { Fragment, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import manageRoutePath from "./manageRoutePath";
import Loading from "@app/components/loader/Loading";
import ErrorBoundary from "../layouts/error-Boundary";

function RenderRoute() {
  const allroutes = manageRoutePath();
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          {allroutes?.map((route, index) => {
            const Component = route?.component;
            const Layout = route?.layout || Fragment;
            const Guard = route?.Guard || Fragment;

            return (
              <Route
                path={route?.path}
                exact={route?.exact}
                key={index}
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default RenderRoute;
