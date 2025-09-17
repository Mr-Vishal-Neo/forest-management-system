import loginInputCss from "./loginInput.module.scss";
import { useEffect, useState } from "react";
// import { Images } from "../../assets/assets";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import type { LoginInputType } from "../../types/types";
// import type { Icons } from "../../assets/icons/icons";
// type IconKeys = keyof typeof Icons;

interface LoginInputProps extends Omit<LoginInputType, "icon"> {
  icon?: string;
  hasError?: boolean;
}

const LoginInput = ({
  inputLabel,
  inputType,
  inputName,
  inputId,
  icon,
  customCls,
  inputValue,
  freezeInput,
  getInputValue,
  register,
  hasError,
  
}: LoginInputProps) => {
  const [visible, setVisible] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const currentType =
    inputName === "userPassword" && visible ? "text" : inputType;

  const updateVisibilityState = () => {
    setVisible((prev) => !prev);
  };

  // Update hasValue when inputValue (for controlled) changes
  useEffect(() => {
    if (inputValue !== undefined) {
      setHasValue(!!inputValue);
    }
  }, [inputValue]);

  // Called when input changes (works for both controlled + RHF)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getInputValue) getInputValue(e); // controlled input
    setHasValue(e.target.value.trim() !== "");
  };
  return (
    <div
      className={`${loginInputCss["frs-input__wrap"]} ${
        hasValue ? loginInputCss["frs-input--filled"] : ""
      }`}
    >
      <input
        type={currentType}
        name={inputName}
        id={inputId}
        className={`${loginInputCss["frs-input__inputBox"]} ${
          hasError ? loginInputCss["frs-input__inputBox--error"] : ""
        }`}
        onChange={handleInputChange}
        disabled={freezeInput}
        {...(register ? register : {})}
        autoComplete="off"
      />
      <label
        htmlFor={inputId}
        className={`${loginInputCss["frs-input__label"]}`}
      >
        {inputLabel}
      </label>
      {icon === "passwordEye" && (
        <span
          className={`${loginInputCss[customCls || ""]} ${
            loginInputCss["frs-input__icon"]
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            updateVisibilityState();
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              updateVisibilityState();
            }
          }}
        >
          {visible ? (
            <FaRegEye id="show-password" size={30} />
          ) : (
            <FaRegEyeSlash id="hide-password" size={30} />
          )}
        </span>
      )}
    </div>
  );
};

export default LoginInput;
