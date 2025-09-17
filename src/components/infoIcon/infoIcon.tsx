import { useState } from "react";
import { Icons } from "../../assets/icons/icons";
import infoIconCss from "./infoIcon.module.scss";
import type { InfoIconProps } from "../../types/types";

const InfoIcon = ({ tooltipText }: InfoIconProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={infoIconCss["frs-info__info-wrapper"]}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img
        src={showTooltip ? Icons.infoHover : Icons.info}
        alt="info-icon"
        className={infoIconCss["frs-info__info"]}
      />
      {showTooltip && (
        <div className={infoIconCss["frs-info__tooltip"]}>{tooltipText}</div>
      )}
    </div>
  );
};

export default InfoIcon;
