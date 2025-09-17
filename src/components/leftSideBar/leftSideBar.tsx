import { Icons } from "../../assets/icons/icons";
// import { extraLeftSideIconList } from "../../data/extraLeftSideIconData";
import { leftSideIconList } from "../../data/leftSideIconData";
import type { SidebarType } from "../../types/types";
import LeftSideButton from "../leftSideButton/leftSideButton";
import leftSideBarCss from "./leftSideBar.module.scss";

const LeftSideBar = ({
  onIconClick,
  sidebarOpen,
  getToggleFn,
  sideText,
  activePanel,
}: SidebarType & {
  sidebarOpen?: boolean;
  toggleSidebar?: () => void;
  activePanel?: string;
}) => {
  console.log("sidebarOpen:::", sidebarOpen);
  // console.log('toggleSidebar:::', getToggleFn())
  console.log("activePanel:::", activePanel);
  return (
    <>
      <div
        className={`${leftSideBarCss["frs-sidebar__wrap"]} ${
          sidebarOpen ? leftSideBarCss["frs-sidebar--active"] : ""
        }`}
      >
        {/* product logo */}
        <div
          className={`${leftSideBarCss["frs-sidebar__logo"]}`}
          onClick={getToggleFn}
          // className={`${leftSideBarCss["frs-sidebar__logo"]} ${
          //   sidebarOpen ? leftSideBarCss["frs-sidebar--logo-active"] : ""
          // }`}
          // onClick={getToggleFn}
        >
          <img
            src={Icons?.leftSideBar}
            alt="Frs logo"
            id="sidebar-toggle-icon"
            className={`${leftSideBarCss["frs-sidebar__toggle"]}`}
          />
          {sideText && (
            <p
              id="sidebar-text"
              className={`${leftSideBarCss["frs-sidebar__logo-text"]} ${
                sideText ? leftSideBarCss["frs-sidebar__text--active"] : ""
              }`}
            >
              logo
            </p>
          )}
          <img
            id="arrow-icon"
            src={sidebarOpen ? Icons.toggleLeft : Icons.toggleRight}
            alt="Toggle button"
            className={`${leftSideBarCss["frs-sidebar__toggle-arrow-right"]} ${
              sidebarOpen
                ? `${leftSideBarCss["frs-sidebar--logo-active"]} ${leftSideBarCss["frs-sidebar__toggle-arrow-left"]}`
                : ""
            }`}
          />
        </div>
        {/* sidebar links */}
        <div className={`${leftSideBarCss["frs-sidebar__items"]}`}>
          {leftSideIconList?.map((item) => {
            return (
              <div
                key={item?.id}
                id={`${item?.id}`}
                onClick={() => onIconClick(item.key)}
              >
                {/* <IconWithTooltip icon={item?.icon} tooltipText={item?.tooltip} position="right" customCls='sidebarBtn' /> */}
                <LeftSideButton
                  sideBarText={sideText}
                  sideBtnText={item?.tooltip}
                  sideBtnIcon={item?.icon}
                  isActive={item.key === activePanel}
                />
              </div>
            );
          })}
        </div>

        {/* <div className={leftSideBarCss["frs-sidebar__extra-items"]}>
          {extraLeftSideIconList.map((item) => (
            <div key={item.id}>
              <LeftSideButton
                sideBarText={sideText}
                sideBtnText={item.tooltip}
                sideBtnIcon={item.icon}
                isActive={false}
              />
            </div>
          ))}
        </div> */}
        {/* saved work */}
        {/* <Link
          to={"/saved-work"}
          className={`${leftSideBarCss["frs-sidebar__item"]} ${leftSideBarCss["frs-sidebar__saved"]}`}
        >
          <img src={Images?.savedWork} alt="Saved Work" />
          <p
            className={`${leftSideBarCss["frs-sidebar__text"]} ${
              sideText ? leftSideBarCss["frs-sidebar__text--active"] : ""
            }`}
          >
            saved work
          </p>
        </Link> */}
      </div>
    </>
  );
};

export default LeftSideBar;
