import { Outlet, useLocation, useNavigate } from "react-router-dom";
import layoutCss from "./layout.module.scss";
import LeftSideBar from "../leftSideBar/leftSideBar";
import { useEffect } from "react";
import LeftSidePanel from "../leftSidePanel/leftSidePanel";
import RightSideBar from "../rightSideBar/rightSideBar";
import Footer from "../footer/footer";
import { panelDataMap } from "../../data/panalDataMap";
import type { BiodData, IconKey, RightIconKey } from "../../types/types";
import TabSection from "../tabSection/tabSection";
import LoadingSpinner from "../loading/loadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { sidebarApiMap } from "../../data/sidebarApiMapData";
import type { AppDispatch } from "../../store/store";
import type { RootState } from "../../store/store";
import { toast } from "react-toastify";
import { removeItem } from "../../utils/sessionStorageUtils";
import {
  setActivePanelKey,
  // setSidebarOpen,
  // setSideBarText,
  toggleSideBarText,
  toggleSidebar as toggleSidebarAction, // renamed to avoid conflict
} from "../../store/layoutSlice";

const Layout = () => {
  const access_token = useSelector(
    (state: RootState) => state.auth.access_token
  );

  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboardPage = location.pathname === "/dashboard";

  const sidebarData = useSelector((state: RootState) => state.sidebar);
  const biodData = sidebarData.biodiversity as Partial<BiodData>;

  const { activePanelKey, sidebarOpen, sideBarText } = useSelector(
    (state: RootState) => state.layout
  );

  console.log("sidebarData", sidebarData);
  console.log("isDashboardPage", isDashboardPage);

  const currentPanelData =
    (activePanelKey && biodData[activePanelKey]) ||
    (activePanelKey ? panelDataMap[activePanelKey] : null);

  useEffect(() => {
    if (isDashboardPage && !access_token) {
      navigate("/", { replace: true });
    }
  }, [isDashboardPage, access_token, navigate]);

  const handleIconClick = (key: IconKey) => {
    dispatch(setActivePanelKey(activePanelKey === key ? null : key));

    if (key === "logout") {
      removeItem("access_token");
      toast.success("You’re now logged out", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,
        theme: "colored",
      });
      navigate("/");
      return;
    }

    const thunk = sidebarApiMap[key];
    if (thunk) {
      dispatch(thunk());
    }
  };

  const getToggleFn = () => {
    dispatch(toggleSidebarAction());
    if (!sidebarOpen) {
      setTimeout(() => {
        dispatch(toggleSideBarText());
      }, 500);
    } else {
      dispatch(toggleSideBarText());
    }
  };

  // Renamed this function to avoid conflict with action name
  // const handleToggleSidebar = () => {
  //   dispatch(toggleSidebarAction());
  // };

  const openSideBar = (id: string) => {
    if (id === "select") {
      getToggleFn();
    }
  };

  if (isDashboardPage && !access_token) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <div className={layoutCss.layout}>
      <div className={layoutCss["layout__content"]}>
        <Outlet />
        {isDashboardPage && access_token && (
          <div className={layoutCss["layout__main-wrapper"]}>
            <LeftSideBar
              getToggleFn={getToggleFn}
              onIconClick={handleIconClick}
              sidebarOpen={sidebarOpen}
              sideText={sideBarText}
              activePanel={activePanelKey ?? undefined}
            />

            {activePanelKey && currentPanelData && (
              <LeftSidePanel
                content={currentPanelData?.content}
                city={currentPanelData?.city}
                icons={currentPanelData?.icons}
                pieData={currentPanelData?.pieData}
                onClose={() => dispatch(setActivePanelKey(null))}
              />
            )}

            <div
              className={`${layoutCss["layout__tab-section-wrap"]} ${
                activePanelKey
                  ? layoutCss["layout__with-left-panel"]
                  : layoutCss["layout__with-sidebar"]
              }`}
            >
              <TabSection />
            </div>

            <RightSideBar
              handleIconClick={openSideBar}
              activeKey={activePanelKey as RightIconKey}
            />
          </div>
        )}
      </div>
      {(!isDashboardPage || (isDashboardPage && access_token)) && <Footer />}
    </div>
  );
};

export default Layout;
