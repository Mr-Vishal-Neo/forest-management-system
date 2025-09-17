import type { FC } from "react";
import CustomLineChart from "../../customLineChart/customLineChart";
import Dropdown from "../../dropdownRoles/dropdownRoles";
import siteAnalysisTabCss from "./siteAnalysisTab.module.scss";

interface SiteAnalysisTabProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const SiteAnalysisTab: FC<SiteAnalysisTabProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className={siteAnalysisTabCss["frs-tab-section__site-analysis"]}>
      {/* Dropdown */}
      <div className={siteAnalysisTabCss["frs-tab-section__dropdown"]}>
        <Dropdown
        id="site-analysis"
          options={[
            "Satellite Trend",
            "Elevation Range",
            "Canopy Cover",
            "Forest Type",
            "Forest Health",
          ]}
          value={selectedOption}
          onChange={(val) => setSelectedOption(val)}
          placeholder="Select analysis type"
        />
      </div>

      {/* Line Chart */}
      <div className={siteAnalysisTabCss["frs-tab-section__chart"]}>
        <CustomLineChart />
      </div>
    </div>
  );
};

export default SiteAnalysisTab;
