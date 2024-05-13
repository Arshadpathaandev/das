import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { setWindowClass } from "@app/utils/helpers";
import { Checkbox } from "@profabric/react-components";
import * as Yup from "yup";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "@app/styles/common";
import { signInAction } from "../../store/reducers/loginSlice/loginSlice";
import Input from "@app/components/formComponent/Input";
import { setLoading } from "../../store/reducers/loadingSlice/loadingSlice";
const Login = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);
  const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [t] = useTranslation();

  const { handleChange, values, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    // validationSchema: Yup.object({
    //   email: Yup.string().email("Invalid email address").required("Required"),
    //   password: Yup.string()
    //     .min(5, "Must be 5 characters or more")
    //     .max(30, "Must be 30 characters or less")
    //     .required("Required"),
    // }),
    onSubmit: (values) => {
      dispatch(signInAction(values));

      navigate("/opd-servicebooking");
    },
  });

  setWindowClass("hold-transition login-page");

  return (
    <div className="login-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <Link to="/" className="h1">
            <b>Admin</b>
            <span>LTE</span>
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">{t("login.label.signIn")}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <InputGroup className="d-flex justify-content-center mb-3">
                <Input
                  type="text"
                  className="form-control m-0"
                  id="text"
                  name="userName"
                  lable={t("Username")}
                  placeholder=" "
                  value={values?.userName}
                  onChange={handleChange}
                  respclass="col-10"
                />
                {/* {touched.email && errors.email ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                ) : ( */}
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-envelope" />
                  </InputGroup.Text>
                </InputGroup.Append>
                {/* )} */}
              </InputGroup>
            </div>
            <div className="mb-3">
            <InputGroup className="d-flex justify-content-center mb-3">
                <Input
                  type="text"
                  className="form-control m-0"
                  id="password"
                  name="password"
                  lable={t("Password")}
                  value={values?.password}
                  placeholder=" "
                  onChange={handleChange}
                  respclass="col-10"
                />
                {/* {touched.password && errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : ( */}
                <InputGroup.Append>
                  <InputGroup.Text>
                    <i className="fas fa-lock" />
                  </InputGroup.Text>
                </InputGroup.Append>
                {/* )} */}
              </InputGroup>
            </div>

            <div className="row">
              <div className="col-8">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox checked={false} />
                  <label style={{ margin: 0, padding: 0, paddingLeft: "4px" }}>
                    {t("login.label.rememberMe")}
                  </label>
                </div>
              </div>
              <div className="col-4">
                <Button
                  loading={isAuthLoading}
                  disabled={isFacebookAuthLoading || isGoogleAuthLoading}
                  onClick={handleSubmit}
                >
                  {t("login.button.signIn.label")}
                </Button>
              </div>
            </div>
          </form>
          {/* <div className="social-auth-links text-center mt-2 mb-3">
            <Button
              className="mb-2"
              onClick={loginByFacebook}
              loading={isFacebookAuthLoading}
              disabled={isAuthLoading || isGoogleAuthLoading}
            >
              <i className="fab fa-facebook mr-2" />
              {t("login.button.signIn.social", {
                what: "Facebook",
              })}
            </Button>
            <Button
              variant="danger"
              onClick={loginByGoogle}
              loading={isGoogleAuthLoading}
              disabled={isAuthLoading || isFacebookAuthLoading}
            >
              <i className="fab fa-google mr-2" />
              {t("login.button.signIn.social", { what: "Google" })}
            </Button>
          </div> */}
          {/* <p className="mb-1">
            <Link to="/forgot-password">{t("login.label.forgotPass")}</Link>
          </p>
          <p className="mb-0">
            <Link to="/register" className="text-center">
              {t("login.label.registerNew")}
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
