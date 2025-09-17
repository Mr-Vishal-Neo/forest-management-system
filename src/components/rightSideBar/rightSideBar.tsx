import rightSidebarCss from "./rightSidebar.module.scss";
// import { Images } from "../../assets/assets";
import type { RightBarType } from "../../types/types";
// import ButtonIcon from "../buttonIcon/buttonIcon";
import IconWithTooltip from "../iconWithTooltip/iconWithTooltip";
import { rightSideIconList } from "../../data/rightSideIconData";
import { useState } from "react";
import LayerModalBox from "../layerModal/layerModalBox";
import RightSideButtons from "../rightSideButton/rightSideButtons";

const RightSideBar = ({
  // isPanelOpen,
  // onIconClick,
  activeKey,
}: // handleIconClick,
RightBarType) => {
  const [openLayerModal, setOpenLayerModal] = useState<string | null>(null);

  console.log("openLayerModal", openLayerModal);

  const handleIconClick = (key: string) => {
    if (openLayerModal === key) {
      setOpenLayerModal(null);
    } else {
      setOpenLayerModal(key);
    }
  };

  return (
    <>
      <RightSideButtons />
      <div className={rightSidebarCss["frs-right-sidebar__wrap"]}>
        <div className={rightSidebarCss["frs-right-sidebar__icons"]}>
          {/* Icons outside white group */}
          <div className={rightSidebarCss["frs-right-sidebar__icon-layer"]}>
            {rightSideIconList
              .filter(
                (item) =>
                  ![
                    "measure",
                    "applyModels",
                    "leaf",
                    "mountains",
                    "graph",
                    "doller",
                  ].includes(item.key)
              )
              .map((item) => (
                <div
                  key={item.id}
                  className={rightSidebarCss["frs-right-sidebar__icon-wrap"]}
                >
                  <div
                    id={`${item.key}`}
                    className={`${rightSidebarCss["frs-right-sidebar__icon"]} ${
                      activeKey === item.key
                        ? rightSidebarCss["frs-right-sidebar__icon--active"]
                        : ""
                    }`}
                    onClick={() => handleIconClick(item.key)}
                  >
                    <IconWithTooltip
                      icon={item.icon}
                      tooltipText={item.tooltip}
                      position="left"
                    />
                  </div>
                </div>
              ))}
          </div>
          {/* Grouped icons in white background */}
          <div className={rightSidebarCss["frs-right-sidebar__group"]}>
            {rightSideIconList
              .filter((item) =>
                [
                  "measure",
                  "applyModels",
                  "leaf",
                  "mountains",
                  "graph",
                  "doller",
                ].includes(item.key)
              )
              .map((item) => (
                <div
                  key={item.id}
                  className={rightSidebarCss["frs-right-sidebar__icon-wraps"]}
                >
                  <div
                    id={`${item.key}`}
                    className={`${rightSidebarCss["frs-right-sidebar__icon"]} ${
                      activeKey === item.key
                        ? rightSidebarCss["frs-right-sidebar__icon--active"]
                        : ""
                    }`}
                  >
                    <IconWithTooltip
                      icon={item.icon}
                      tooltipText={item.tooltip}
                      position="left"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Show modal only once */}
        {openLayerModal === "mapLayer" && (
          <LayerModalBox onClose={() => setOpenLayerModal(null)} />
        )}
      </div>
    </>
  );
};

export default RightSideBar;
