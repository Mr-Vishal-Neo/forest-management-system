import type { FC } from "react";
import { useState, useRef, useEffect } from "react";
import dropdownCss from "./dropdown.module.scss";
import { Icons } from "../../assets/icons/icons";

type DropdownProps = {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
  onBlur?: () => void;
  id?: string;
  disabledOption?: string;
};

const Dropdown: FC<DropdownProps> = ({
  options,
  value,
  onChange,
  error,
  placeholder = "Select an option",
  onBlur,
  id,
  disabledOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
    onBlur?.();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  return (
    <div className={dropdownCss["frs-dropdown__wrap"]} ref={dropdownRef}>
      <div
        className={`${dropdownCss["frs-dropdown__input"]} ${
          error ? dropdownCss["error"] : ""
        }`}
        tabIndex={0}
        onClick={toggleDropdown}
        id={id}
      >
        <span className={dropdownCss["frs-dropdown__selected"]}>
          {selected || disabledOption || placeholder}
        </span>
        <img
          src={isOpen ? Icons.upArrowRole : Icons.downArrowRole}
          alt="toggle"
          className={dropdownCss["frs-dropdown__icon"]}
        />
      </div>
      {isOpen && (
        <ul
          className={`${dropdownCss["frs-dropdown__list"]} ${
            isOpen ? dropdownCss["open"] : dropdownCss["close"]
          }`}
          role="listbox"
          aria-labelledby={id}
        >
          {disabledOption && (
            <li
              className={`${dropdownCss["frs-dropdown__option"]} ${dropdownCss["disabled"]}`}
              aria-disabled="true"
              role="option"
            >
              {disabledOption}
            </li>
          )}

          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={dropdownCss["frs-dropdown__option"]}
              role="option"
              aria-selected={selected === option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p id="role-error" className={dropdownCss["frs-dropdown__error"]}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
