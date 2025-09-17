import type { PieLabelProps } from "recharts/types/polar/Pie";
import CustomTooltip from "../../customTooltip/customTooltip";
import statisticsTabCss from "./statisticsTab.module.scss";
import { PieChart, Pie, Cell, Legend, Label, Tooltip } from "recharts";

interface PieDataItem {
  name: string;
  value: number;
  color: string;
  index?: number;
}

interface Props {
  pieData: PieDataItem[];
}

const RADIAN = Math.PI / 180;

const StatisticsTab = ({ pieData }: Props) => {
  console.log("Pie Data:", pieData);
  const totalValue = pieData.reduce((sum, item) => sum + item.value, 0);
  // const outerRadius =
  //   totalValue > 0 ? Math.min(70 + totalValue / 100, 120) : 100;

  // const renderLabelLine = ({ cx, cy, midAngle, outerRadius, index }: any) => {
  //   const radius = outerRadius + 10;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <line
  //       x1={cx + outerRadius * Math.cos(-midAngle * RADIAN)}
  //       y1={cy + outerRadius * Math.sin(-midAngle * RADIAN)}
  //       x2={x}
  //       y2={y}
  //       stroke={pieData[index].color}
  //       strokeWidth={1.5}
  //     />
  //   );
  // };

  // Label Text Renderer
  const renderLabelText = (props: PieLabelProps) => {
    const { cx, cy, midAngle, outerRadius, payload } = props;
    if (
      cx === undefined ||
      cy === undefined ||
      midAngle === undefined ||
      outerRadius === undefined
    ) {
      return null; // required values missing
    }
    const radius = outerRadius + 30;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const { name, value } = payload as PieDataItem;

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
      >
        {`${name} ${value}%`}
      </text>
    );
  };

  return (
    <div className={statisticsTabCss["frs-tab-section__statistics"]}>
      {/* Pie Chart Column */}
      <div
        className={statisticsTabCss["frs-tab-section__chart"]}
        style={{ position: "relative", width: 400, height: 260 }}
      >
        <div
          className={statisticsTabCss["frs-tab-section__chart-container"]}
          id="pie-chart-container"
        >
          <PieChart width={350} height={250} id="pie-chart">
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              // labelLine={70}
              label={renderLabelText}
              isAnimationActive={true}
              animationDuration={1000}
              animationEasing="ease-out"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || "#ccc"} />
              ))}
              {/* Optional: static label inside center */}
              <Label value="" position="center" />
            </Pie>

            <Legend
              id="pie-chart-legend"
              className={statisticsTabCss["frs-tab-section__legends"]}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              formatter={(value) => (
                <span style={{ fontSize: 10 }}>{value}</span>
              )}
            />
            <Tooltip content={CustomTooltip} />
          </PieChart>
        </div>
        <div
          className={statisticsTabCss["frs-tab-section__total-count"]}
          id="total-count"
        >
          {totalValue}
        </div>
      </div>
      {/* Summary Column */}
      <div className={statisticsTabCss["frs-tab-section__summary"]}>
        {/* <div className={statisticsTabCss["frs-tab-section__summary-buttons"]}>
          {["Total Area", "Activity", "Tree Cover", "Elevation Range"].map(
            (label, i) => (
              <button
                key={i}
                className={statisticsTabCss["frs-tab-section__summary-button"]}
              >
                {label}
              </button>
            )
          )}
        </div>
        <div className={statisticsTabCss["frs-tab-section__description"]}>
          <p>
            Mumbai covers 0.0603 Mha, with about 12.4% forest cover. In 2023, it
            lost 120 ha of tree cover, emitting around 0.003 Mt of CO₂.
            Biodiversity is low to moderate, with key green areas like Sanjay
            Gandhi National Park and mangroves. Urban growth is the main
            pressure on natural ecosystems.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default StatisticsTab;
