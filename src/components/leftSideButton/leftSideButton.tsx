import type { SideBtnType } from "../../types/types";
import leftSideButtonCss from "./leftSideButton.module.scss";

const LeftSideButton = ({
  sideBtnIcon,
  sideBtnText,
  sideBarText,
  getActionFn,
  isActive,
}: SideBtnType) => {
  return (
    <div
      className={`${leftSideButtonCss["frs-sidebtn__item"]} ${
        isActive ? leftSideButtonCss["frs-sidebtn__item--active"] : ""
      }`}
      onClick={getActionFn}
    >
      {sideBtnIcon ? (
        <img
          id="sidebtn-icon"
          src={sideBtnIcon}
          className={`${leftSideButtonCss["frs-sidebtn__icon"]}`}
        />
      ) : (
        ""
      )}
      <p
        id="sidebtn-text"
        className={`${leftSideButtonCss["frs-sidebtn__text"]} ${
          sideBarText ? leftSideButtonCss["frs-sidebtn__text--active"] : ""
        }`}
      >
        {sideBtnText}
      </p>
      {!sideBarText && (
        <span className={leftSideButtonCss["frs-sidebtn__tooltip"]} id="sidebtn-tooltip">
          {sideBtnText}
        </span>
      )}
    </div>
  );
};

export default LeftSideButton;
