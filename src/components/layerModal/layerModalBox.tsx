import layerModalCss from "./layerModalBox.module.scss";
import { Icons } from "../../assets/icons/icons";

const layers = [
  "Land Cover",
  "Carbon Stock",
  "Change Detection",
  "Forest Canopy Density",
  "Forest Classification",
  "Disturbance Index",
  "Water Bodies",
  "Biomass Input",
  "Soil Moisture",
  "Site Suitability",
  "Hydrological Data",
];

// Mapping layer names to icon keys in Icons object
const layerIconMap: { [key: string]: keyof typeof Icons } = {
  "Land Cover": "landCover",
  "Carbon Stock": "carbonStockk",
  "Change Detection": "changeDetection",
  "Forest Canopy Density": "forestCanopyDensityy",
  "Forest Classification": "forestClassification",
  "Disturbance Index": "distrubanceIndexx",
  "Water Bodies": "waterBodies",
  "Biomass Input": "biomassInput",
  "Soil Moisture": "soilMoisturee",
  "Site Suitability": "siteSuitability",
  "Hydrological Data": "hydrologicalData",
};

const LayerModalBox = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={layerModalCss.modalBox}>
      <div className={layerModalCss.sideArrow} onClick={onClose} id="close"></div>
      <div className={layerModalCss.layerGrid}>
        {layers.map((layer, i) => {
          const iconKey = layerIconMap[layer];
          const IconComponent = Icons[iconKey];
          return (
            <div key={i} className={layerModalCss.layerItem}>
              {IconComponent ? (
                <img
                  src={IconComponent}
                  alt={layer}
                  className={layerModalCss.layerIcon}
                  id={`${IconComponent}`}
                />
              ) : (
                <div className={layerModalCss.layerIconPlaceholder}>?</div>
              )}
              <p id="layer-text">{layer.split(" ").join("\n")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LayerModalBox;
