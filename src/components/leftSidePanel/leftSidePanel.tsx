import type { IconData } from "../../types/types";
import InfoIcon from "../infoIcon/infoIcon";
import leftSidePanelCss from "./leftSidePanel.module.scss";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

type LeftSidePanelProps = {
  content?: string;
  city?: string;
  icons?: {
    id: number;
    label: string;
    icon: IconData;
  }[];
  pieData?: { name: string; value: number; color: string }[];
  onClose?: () => void;
};

const LeftSidePanel = ({
  content,
  // city,
  icons,
  pieData,
}: LeftSidePanelProps) => {
  return (
    <div className={leftSidePanelCss["frs-side-panel__panel"]}>
      <div className={leftSidePanelCss["frs-side-panel__header"]}>
        <h3 className={leftSidePanelCss["frs-side-panel__title"]}>{content}</h3>
      </div>
      <div className={leftSidePanelCss["frs-side-panel__details"]}>
        {/* <h3 className={leftSidePanelCss["frs-side-panel__city"]}>{city}</h3>{" "} */}
        <div className={leftSidePanelCss["frs-side-panel__park-details"]}>
          <h3 className={leftSidePanelCss["frs-side-panel__city"]}>
            Sanjay Gandhi National Park
          </h3>{" "}
          {/* <img
            src={Icons?.info}
            alt="info-icon"
            className={leftSidePanelCss["frs-side-panel__info"]}
          /> */}
        <InfoIcon tooltipText={"Sanjay Gandhi National Park"} />
        </div>
        <p className={leftSidePanelCss["frs-side-panel__city_desc"]}>
          A National park in Mumbai, India
        </p>{" "}
        <div className={leftSidePanelCss["frs-side-panel__icons"]}>
          {icons?.map((item) => (
            <div
              key={item.id}
              className={leftSidePanelCss["frs-side-panel__iconItem"]}
            >
              {typeof item.icon === "object" && item.icon.image ? (
                <img
                  src={`data:image/png;base64,${item.icon.image}`}
                  alt={item.icon.name}
                  className={leftSidePanelCss["frs-side-panel__iconFull"]}
                />
              ) : (
                <div
                  className={leftSidePanelCss["frs-side-panel__iconFallback"]}
                >
                  {/* {item.icon} */}
                  {/* or replace with an <Icon /> component if you have one */}
                </div>
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className={leftSidePanelCss["frs-side-panel__chart-wrap"]}>
          <PieChart width={220} height={220}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              label={({
                cx = 0,
                cy = 0,
                midAngle = 0,
                innerRadius = 0,
                outerRadius = 0,
                value = 0,
                index = 0,
              }) => {
                if (midAngle === undefined) return null;
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 1.8;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const color = pieData?.[index]?.color ?? "#000";
                return (
                  <text
                    x={x}
                    y={y}
                    fill={color}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    {value}
                  </text>
                );
              }}
            >
              {pieData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={12}
              fontWeight="bold"
              fill="#333"
            >
              Use Land
            </text>
            <Tooltip />
          </PieChart>
          <div className={leftSidePanelCss["frs-side-panel__legend"]}>
            {pieData?.map((entry, index) => (
              <div
                key={index}
                className={leftSidePanelCss["frs-side-panel__legend-item"]}
              >
                <span
                  className={leftSidePanelCss["frs-side-panel__legend-dot"]}
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;
