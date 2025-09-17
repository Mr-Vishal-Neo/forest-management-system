import recommendationsTabCss from "./recommendationsTab.module.scss";

const RecommendationsTab = () => {
  return (
    <div className={recommendationsTabCss["frs-tab-section__recommendations"]}>
      <p className={recommendationsTabCss["frs-tab-section__title"]}>
        Plantation Priority Area
      </p>
      <div
        className={
          recommendationsTabCss["frs-tab-section__recommendations-area"]
        }
      ></div>
    </div>
  );
};

export default RecommendationsTab;
