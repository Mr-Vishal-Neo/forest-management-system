import { useState } from "react";
import Dropdown from "../dropdownRoles/dropdownRoles";
import bioDiversityMapAreaCss from "./bioDiversityMapArea.module.scss";
import { FaExpand } from "react-icons/fa";

const BioDiversityMapArea = () => {
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <div className={bioDiversityMapAreaCss["frs-biodiv-map__wrapper"]}>
      <Dropdown
      id="cities"
        options={["Mumbai", "Kolkata", "Chennai", "Bangalore", "Pune"]}
        value={selectedCity}
        onChange={(val) => setSelectedCity(val)}
        placeholder="Select City"
      />

      <button className={bioDiversityMapAreaCss["frs-biodiv-map__button"]}>
        Select and Analyze
      </button>

      <div className={bioDiversityMapAreaCss["frs-biodiv-map__box"]}>
        <FaExpand className={bioDiversityMapAreaCss["frs-biodiv-map__icon"]} />
        <span>Click a layer on map</span>
      </div>

      <p className={bioDiversityMapAreaCss["frs-biodiv-map__description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
    </div>
  );
};

export default BioDiversityMapArea;
