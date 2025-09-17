import { useState } from "react";
import customSliderCss from "./customSlider.module.scss";

interface Props {
  years: number[];
  onChange: (range: { start: number; end: number }) => void;
}

const CustomSlider = ({ years, onChange }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  //   const [endIndex, setEndIndex] = useState(years.length - 1);
  const [endIndex, setEndIndex] = useState(1);

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = Math.min(parseInt(e.target.value), endIndex);
    setStartIndex(newStart);
    onChange({ start: years[newStart], end: years[endIndex] });
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEnd = Math.max(parseInt(e.target.value), startIndex);
    setEndIndex(newEnd);
    onChange({ start: years[startIndex], end: years[newEnd] });
  };

  const rangePercent = (value: number) => (value / (years.length - 1)) * 100;

  const backgroundStyle = {
    background: `linear-gradient(
      to right,
      #e5e5e5 0%,
      #e5e5e5 ${rangePercent(startIndex)}%,
      #28a745 ${rangePercent(startIndex)}%,
      #28a745 ${rangePercent(endIndex)}%,
      #e5e5e5 ${rangePercent(endIndex)}%,
      #e5e5e5 100%
    )`,
  };

  return (
    <div className={customSliderCss["frs-custom-slider__container"]}>
      <div className={customSliderCss["frs-custom-slider__track-wrapper"]}>
        <input
          type="range"
          min="0"
          max={years.length - 1}
          value={startIndex}
          onChange={handleStartChange}
          className={customSliderCss["frs-custom-slider__slider"]}
          style={backgroundStyle}
        />
        <input
          type="range"
          min="0"
          max={years.length - 1}
          value={endIndex}
          onChange={handleEndChange}
          className={customSliderCss["frs-custom-slider__slider"]}
          style={{ ...backgroundStyle, pointerEvents: "auto" }}
        />
      </div>

      <div className={customSliderCss["frs-custom-slider__labels"]}>
        {years.map((year, i) => (
          <span
            key={year}
            className={`${customSliderCss["frs-custom-slider__label"]} ${
              i === startIndex || i === endIndex
                ? customSliderCss["frs-custom-slider__active"]
                : ""
            }`}
          >
            {year}
          </span>
        ))}
      </div>
      <div className={customSliderCss["frs-custom-slider__footer-label"]}>
        Select year
      </div>
    </div>
  );
};

export default CustomSlider;
