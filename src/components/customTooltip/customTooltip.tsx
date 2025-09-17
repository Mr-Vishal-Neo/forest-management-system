import type { CustomTooltipProps } from "../../types/types";

const CustomTooltip = ({ active, payload, coordinate }: CustomTooltipProps) => {
  if (active && payload && payload.length && coordinate) {
    const { name, value, color } = payload[0].payload;
    return (
      <div
        //   className={customTooltipCss["frs-tooltip__main"]}
        style={{
          position: "absolute",
          left: coordinate.x + 40, // move right
          top: coordinate.y - 20, // move slightly up
          backgroundColor: "#333",
          padding: "6px 10px",
          border: `2px solid ${color}`,
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <p style={{ color: "#fff", fontWeight: "500" }}>
          {name}: {value}%
        </p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
