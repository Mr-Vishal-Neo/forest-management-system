import { useState, type FC } from "react";
import StatisticsTab from "../tabs/StatisticsTab/statisticsTab";
import SiteAnalysisTab from "../tabs/SiteAnalysisTab/siteAnalysisTab";
import ChangeDetectionTab from "../tabs/ChangeDetectionTab/changeDetectionTab";
import RecommendationsTab from "../tabs/RecommendationsTab/recommendationsTab";
import SchemePolicyTab from "../tabs/SchemePolicyTab/schemePolicyTab";

interface PieDataItem {
  name: string;
  value: number;
  color: string;
}

interface Props {
  activeTab: string;
  pieData: PieDataItem[];
}

export const TabContentRenderer: FC<Props> = ({ activeTab, pieData }) => {
  const [selectedOption, setSelectedOption] = useState("Satellite Trend");
  // const [selectedYear, setSelectedYear] = useState(2020);

  switch (activeTab) {
    case "Statistics":
      return <StatisticsTab pieData={pieData} />;

    case "Site Analysis":
      return (
        <SiteAnalysisTab
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );

    case "Change Detection":
      return <ChangeDetectionTab />;

    case "Recommendations":
      return <RecommendationsTab />;

    case "Scheme/Policy":
      return <SchemePolicyTab />;

    default:
      return null;
  }
};
