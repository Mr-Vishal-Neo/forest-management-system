import type { ButtonType } from "../../types/types";
import buttonCss from "./button.module.scss";
const Button = ({
  buttonText,
  getBtnState,
  customCls,
  getBtnAction,
  type = "button",
  id,
}: ButtonType) => {
  return (
    <button
      id={id}
      type={type}
      className={`${buttonCss["frs-button"]} ${buttonCss[`${customCls}`]} ${
        getBtnState ? buttonCss["frs-button--disable"] : ""
      }`}
      onClick={getBtnAction}
    >
      {buttonText}
    </button>
  );
};

export default Button;
