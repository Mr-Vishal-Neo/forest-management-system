import { useEffect, useRef, useState } from "react";
import tabSectionCss from "./tabSection.module.scss";
import AnalyticsButton from "../analyticsButton/analyticsButton";
import { TabContentRenderer } from "../renderTabContent/renderTabContent";
import { Icons } from "../../assets/icons/icons";

const tabs = [
  "Statistics",
  "Site Analysis",
  "Change Detection",
  "Recommendations",
  "Scheme/Policy",
];

const pieData = [
  { name: "Conservation", value: 20, color: "#00c49f" },
  { name: "Richness", value: 20, color: "#0088fe" },
  { name: "Risk", value: 10, color: "#ffbb28" },
  { name: "Diversity", value: 50, color: "#ff8042" },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Statistics");
  const [showAnalyticsDetails, setShowAnalyticsDetails] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // const renderTabContent = () => {
  //   switch (activeTab) {
  //     case "Statistics":
  //       return <div>Statistics charts & summary go here</div>;
  //     case "Site Analysis":
  //       return <div>Site Analysis visuals here</div>;
  //     case "Change Detection":
  //       return <div>Change detection data</div>;
  //     case "Recommendations":
  //       return <div>Recommendations content</div>;
  //     case "Scheme/Policy":
  //       return <div>Policies & schemes listed</div>;
  //     default:
  //       return null;
  //   }
  // };

  useEffect(() => {
    if (showAnalyticsDetails && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showAnalyticsDetails]);

  const handleTabClick = (tab: string) => {
    if (tab === activeTab) {
      // If clicking the active tab, toggle collapse/expand
      setShowAnalyticsDetails((prev) => !prev);
    } else {
      // If clicking a new tab, set it and expand
      setActiveTab(tab);
      setShowAnalyticsDetails(true);
    }
  };

  return (
    <div
      className={`${tabSectionCss["frs-tab-section__wrap"]}  ${
        showAnalyticsDetails
          ? tabSectionCss["frs-tab-section__wrap--expanded"]
          : tabSectionCss["frs-tab-section__wrap--collapsed"]
      }`}
      // style={{ position: "relative" }}
    >
      <div className={tabSectionCss["frs-tab-section__header"]}>
        <AnalyticsButton
          isVisible={showAnalyticsDetails}
          onToggle={() => setShowAnalyticsDetails((prev) => !prev)}
        />
      </div>

      <div className={tabSectionCss["frs-tab-section__tabs"]}>
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`${tab}`}
            className={`${tabSectionCss["frs-tab-section__tab"]} ${
              activeTab === tab
                ? tabSectionCss["frs-tab-section__tab--active"]
                : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* {showAnalyticsDetails && (
        <div className={tabSectionCss["frs-tab-section__content"]}>
          <TabContentRenderer activeTab={activeTab} pieData={pieData} />
          <div className={tabSectionCss["frs-tab-section__export"]}>
            <button className={tabSectionCss["frs-tab-section__export-button"]}>
              Export Report
              <img
                src={Icons?.exportReport}
                alt="Export Report"
                className={tabSectionCss["frs-tab-section__export-icon"]}
              />
            </button>
          </div>
        </div>
      )} */}
      {showAnalyticsDetails && (
        <div className={tabSectionCss["frs-tab-section__content"]}>
          <div className={tabSectionCss["frs-tab-section__left"]}>
            <TabContentRenderer activeTab={activeTab} pieData={pieData} />
          </div>
          <div className={tabSectionCss["frs-tab-section__right"]}>
            <div className={tabSectionCss["frs-tab-section__export"]}>
              <button
                className={tabSectionCss["frs-tab-section__export-button"]}
                id="export-btn"
              >
                Export Report
                <img
                  src={Icons?.exportReport}
                  alt="Export Report"
                  className={tabSectionCss["frs-tab-section__export-icon"]}
                />
              </button>
            </div>
            {/* Add more details here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabSection;
