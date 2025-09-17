import { Icons } from "../../assets/icons/icons";
import type { AnalyticsButtonProps } from "../../types/types";
import analyticsButtonCss from "./analyticsButton.module.scss";

const AnalyticsButton = ({ isVisible, onToggle }: AnalyticsButtonProps) => {
  return (
    <button
      className={`${analyticsButtonCss["frs-analytics-btn__btns"]}
      ${
        isVisible
          ? analyticsButtonCss["frs-analytics-btn__show"]
          : analyticsButtonCss["frs-analytics-btn__hide"]
      }
      `}
      onClick={onToggle}
      id="analytics-btn"
    >
      <span
        id="analytics-text"
        // className={`${analyticsButtonCss["frs-analytics-btn__hide-text"]} ${
        //       isVisible ? analyticsButtonCss["frs-analytics-btn__show-text"] : ""
        //     }`}>
        className={analyticsButtonCss["frs-analytics-btn__text"]}
      >
        {isVisible ? "Hide Analytics" : "Show Analytics"}
      </span>
      <img
        id="analytics-icon"
        src={isVisible ? Icons?.downArrow : Icons?.upArrow}
        alt="Toggle"
        className={analyticsButtonCss["frs-analytics-btn__icon"]}
      />
    </button>
  );
};

export default AnalyticsButton;
