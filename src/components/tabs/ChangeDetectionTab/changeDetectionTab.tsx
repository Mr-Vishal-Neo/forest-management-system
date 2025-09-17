import CustomCheckbox from '../../customCheckbox/customCheckbox';
import CustomSlider from '../../customSlider/customSlider';
import changeDetectionTabCss from './changeDetectionTab.module.scss'

const ChangeDetectionTab = () => {
  return (
    <div className={changeDetectionTabCss["frs-tab-section__change-detection"]}>
      {/* <h3>Change Detection for Year: {selectedYear}</h3> */}
      <CustomSlider
        years={[2020, 2021, 2022, 2023, 2024]}
        onChange={({ start, end }) => {
          console.log("Selected range:", start, "to", end);
        }}
      />
      {/* Optional: Add visuals or content for selectedYear */}
      <div className={changeDetectionTabCss["frs-tab-section__checkbox-group"]}>
        <CustomCheckbox
          label="Canopy Density"
          onChange={(checked) => console.log("Checked:", checked)}
        />
        <CustomCheckbox
          label="Forest Degradation"
          onChange={(checked) => console.log("Checked:", checked)}
        />
        <CustomCheckbox
          label="NA"
          onChange={(checked) => console.log("Checked:", checked)}
        />
        <CustomCheckbox
          label="Encroachment"
          onChange={(checked) => console.log("Checked:", checked)}
        />
        <CustomCheckbox
          label="Reforestation Impact"
          onChange={(checked) => console.log("Checked:", checked)}
        />
      </div>
    </div>
  );
};

export default ChangeDetectionTab;
