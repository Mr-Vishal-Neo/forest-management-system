import { Link, NavLink } from "react-router-dom";
import loginCss from "./login.module.scss";
import LoginInput from "../../components/loginInput/LoginInput";
// import LoginChecbox from "../../components/loginCheckbox/loginCheckbox";
import Button from "../../components/button/button";
import { Icons } from "../../assets/icons/icons";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { DEFAULT_USER } from "../../utils/auth";
// import { toast } from "react-toastify";
import Dropdown from "../../components/dropdownRoles/dropdownRoles";

type FormData = {
  userEmail: string;
  userPassword: string;
  userRole: string;
};

const schema = yup.object({
  userEmail: yup
    .string()
    .required("Email or phone number is required")
    .test(
      "email-or-phone",
      "Enter a valid email or 10-digit phone number",
      function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        return emailRegex.test(value || "") || phoneRegex.test(value || "");
      }
    ),
  userPassword: yup.string().required("Password is required"),
  /*.matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/,
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    ),*/
  userRole: yup.string().required("Role is required"),
});

const Login = () => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const onSubmit = () => {
    const authUrl = `${
      import.meta.env.VITE_KEYCLOAK_URL
    }/realms/fms-ui/protocol/openid-connect/auth?client_id=${
      import.meta.env.VITE_KEYCLOAK_CLIENT_ID
    }&response_type=code&redirect_uri=${
      import.meta.env.VITE_REACT_APP_API_URL
    }/callback&scope=openid`;

    window.location.href = authUrl;
  };

  // const onSubmit1 = ({ userEmail, userPassword }: FormData) => {
  //   if (
  //     userEmail === DEFAULT_USER.username &&
  //     userPassword === DEFAULT_USER.password
  //   ) {
  //     toast.success("Successfully logged in", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       pauseOnHover: false,
  //       theme: "colored",
  //     });
  //     sessionStorage.setItem("frs-auth", "true");
  //     setTimeout(() => {
  //       navigate("/dashboard");
  //     }, 1000);
  //   } else {
  //     toast.error("Invalid credentials", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       pauseOnHover: true,
  //       theme: "colored",
  //     });
  //   }
  // };

  return (
    <div className={loginCss["frs-login__container"]}>
      {/* Header */}
      <header className={loginCss["frs-login__header"]}>
        <div className={loginCss["frs-login__logo"]}>
          <img
            src={Icons.logo}
            alt="genesys-logo"
            id="genesys-logo"
            className={loginCss["frs-login__genesys-logo"]}
          />
        </div>
        {/* <nav className={loginCss["frs-login__tabs"]}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav> */}
        <nav className={loginCss["frs-login__tabs"]}>
          <NavLink
            id="home"
            to="/"
            end
            className={({ isActive }) =>
              isActive ? loginCss["activeTab"] : loginCss["inactiveTab"]
            }
          >
            Home
          </NavLink>
          <NavLink
            id="about"
            to="/about"
            className={({ isActive }) =>
              isActive ? loginCss["activeTab"] : loginCss["inactiveTab"]
            }
          >
            About
          </NavLink>
        </nav>
        <div className={loginCss["frs-login__help"]}>
          <Link to={""} id="help">
            Help
          </Link>
          <img src={Icons.help} alt="help-logo" id="help-logo" />
        </div>
      </header>

      {/* Main Section */}
      <main className={loginCss["frs-login__main"]}>
        {/* Left Content */}
        <section className={loginCss["frs-login__info"]}>
          <h1 className={loginCss["frs-login__info__title"]} id="info-title">
            ReGen
          </h1>
          <h3
            className={loginCss["frs-login__info__subtitle"]}
            id="info-subtitle"
          >
            Platfrom for Integrated Forestry Solution
          </h3>
          <p
            className={loginCss["frs-login__info__description"]}
            id="info-description"
          >
            A comprehensive, map-based platform that delivers deep insights into
            India’s forest landscapes. From real-time monitoring of biodiversity
            and carbon emissions to tracking deforestation, catchment health,
            and wildlife threats — every module is designed to inform smarter
            decisions. Explore dynamic dashboards, interactive maps, and
            customizable data layers to visualize forest health at national,
            state, and local levels. Whether you're a policymaker, researcher,
            or conservationist, our solution provides the tools to protect,
            manage, and restore India’s forest ecosystems with precision and
            purpose.
          </p>
        </section>

        {/* Right Login Box */}
        <section className={loginCss["frs-login__box"]}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={loginCss["frs-login__form"]}
          >
            <p className={loginCss["frs-login__head"]} id="login-heading">
              Login
              {/* to <span>DigiFI</span>{" "} */}
            </p>

            <LoginInput
              inputLabel="Email or phone number"
              inputType="text"
              inputName="userEmail"
              inputId="email"
              register={register("userEmail")}
              inputValue={watch("userEmail")}
              hasError={!!errors.userEmail}
              //   inputValue={loginData?.userEmail}
              //   getInputValue={handleInput}
            />
            {errors.userEmail && (
              <p id="email-error" className={loginCss["frs-login__error-text"]}>
                {errors.userEmail.message}
              </p>
            )}

            <LoginInput
              inputLabel="Your password"
              inputType="password"
              inputName="userPassword"
              inputId="password"
              icon="passwordEye"
              customCls="frs-input__password"
              register={register("userPassword")}
              inputValue={watch("userPassword")}
              hasError={!!errors.userPassword}
              //   inputValue={loginData?.userPassword}
              //   getInputValue={handleInput}
              //   getInputToggle={handleTogglePassword}
            />
            {errors.userPassword && (
              <p
                id="password-error"
                className={loginCss["frs-login__error-text"]}
              >
                {errors.userPassword.message}
              </p>
            )}
            <Controller
              name="userRole"
              control={control}
              rules={{ required: "Role is required" }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id="role-type"
                  options={[
                    "Forest Administrator",
                    "Forest Officer",
                    "Researcher",
                    "Forest Administrator",
                    "Forest Officer",
                    "Researcher",
                    "Forest Administrator",
                    "Forest Officer",
                    "Researcher",
                  ]}
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                  placeholder="Select your role"
                  onBlur={field.onBlur}
                  disabledOption="Please Select your role"
                />
              )}
            />
            <Button
              id={"login-btn"}
              buttonText="Log in"
              customCls="frs-login__btn"
              type="submit"
            />
            <div className={loginCss["frs-login__terms-privacy"]}>
              <p id="agreement">
                By creating an account, you agree to the
                <Link id="terms-of-use" to={""}>
                  {" "}
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link id="privacy-policy" to={""}>
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className={loginCss["frs-login__signin"]}>
              <Link
                id="sign-in"
                to={""}
                className={loginCss["frs-login__signin-issue"]}
              >
                Other issue with sign in
              </Link>
              <Link
                id="forgot-password"
                to={""}
                className={loginCss["frs-login__forget-password"]}
              >
                Forgot your password?
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
