import schemePolicyTabCss from "./schemePolicyTab.module.scss";

const SchemePolicyTab = () => {
  return (
    <div className={schemePolicyTabCss["frs-tab-section__schemePolicy"]}>
      <div>
        <p className={schemePolicyTabCss["frs-tab-section__title"]}>
          Fund Allocation
        </p>
        <div
          className={
            schemePolicyTabCss["frs-tab-section__schemePolicy-area"]
          }
        ></div>
      </div>
      <div>
        <p className={schemePolicyTabCss["frs-tab-section__title"]}>
          Updates
        </p>
        <div
          className={
            schemePolicyTabCss["frs-tab-section__schemePolicy-area"]
          }
        ></div>
      </div>
      <div>
        <p className={schemePolicyTabCss["frs-tab-section__title"]}>
          NA
        </p>
        <div
          className={
            schemePolicyTabCss["frs-tab-section__schemePolicy-area"]
          }
        ></div>
      </div>
    </div>
  );
};

export default SchemePolicyTab;
