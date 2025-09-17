import { useState } from "react";
import customCheckboxCss from "./customCheckbox.module.scss";

interface Props {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CustomCheckbox = ({ label, checked = false, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className={customCheckboxCss["frs-checkbox__label"]}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={customCheckboxCss["frs-checkbox__input"]}
      />
      <span className={customCheckboxCss["frs-checkbox__custom"]}></span>
      <span className={customCheckboxCss["frs-checkbox__text"]}>{label}</span>
    </label>
  );
};

export default CustomCheckbox;
