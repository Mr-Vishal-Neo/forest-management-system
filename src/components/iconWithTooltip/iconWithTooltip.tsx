import React from "react";
import iconWithTooltipCss from "./IconWithTooltip.module.scss";
import type { IconWithTooltipType } from "../../types/types";

const IconWithTooltip: React.FC<IconWithTooltipType> = ({
  icon,
  tooltipText,
  position = "right",
  customCls = "",
  getActionFn,
}) => {
  return (
    <div
      className={` ${iconWithTooltipCss[`frs-tooltip__${customCls}`]} ${
        iconWithTooltipCss["frs-tooltip__wrap"]
      }`}
      onClick={getActionFn}
    >
      {tooltipText ? (
        <span
          id="tooltip-text"
          className={`${iconWithTooltipCss["frs-tooltip__text"]} ${
            iconWithTooltipCss[`frs-tooltip__text--${position}`]
          }`}
        >
          {tooltipText}
        </span>
      ) : (
        ""
      )}
      <img
        src={icon}
        id="tooltip-icon"
        alt={tooltipText}
        className={iconWithTooltipCss["frs-tooltip__iconImage"]}
      />
    </div>
  );
};

export default IconWithTooltip;
