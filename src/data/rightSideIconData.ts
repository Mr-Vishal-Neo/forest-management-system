import { Icons } from "../assets/icons/icons";
import type { IconItem } from "../types/types";

// primary icons

// secondary icons
// const subIconList: SubIconItem[] = [
//   { id: "select", icon: Images.select, tooltip: "Select" },
//   { id: "rectangle", icon: Images.rectangle, tooltip: "Rectangle" },
//   { id: "polygon", icon: Images.polygon, tooltip: "Polygon" },
// ];

// const subGeoIconList: SubIconItem[] = [
//   { id: "buffer", icon: Images.bufferAnalysis, tooltip: "Buffer Analysis" },
//   { id: "overlay", icon: Images.overlayAnalysis, tooltip: "Overlay Analysis" },
// ];

export const rightSideIconList: IconItem[] = [
  // {
  //   id: 1,
  //   icon: Icons?.findLocation,
  //   tooltip: "Location",
  //   key: "findLocation",
  // },
  {
    id: 1,
    icon: Icons?.mapLayer,
    tooltip: "Layer",
    key: "mapLayer",
  },
  { id: 2, icon: Icons?.measure, tooltip: "Measure", key: "measure" },
  {
    id: 3,
    icon: Icons?.applyModels,
    tooltip: "Apply Models",
    key: "applyModels",
  },
  { id: 4, icon: Icons?.leaf, tooltip: "Carbon sequestration", key: "leaf" },
  {
    id: 5,
    icon: Icons?.mountains,
    tooltip: "Terrain",
    key: "mountains",
  },
  { id: 6, icon: Icons?.graph, tooltip: "Analyze", key: "graph" },
  { id: 7, icon: Icons?.doller, tooltip: "Credits", key: "doller" },
];
