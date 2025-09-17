import { Icons } from "../assets/icons/icons";
import type { IconKey } from "../types/types";

export const panelDataMap: Record<
  IconKey,
  {
    content: string;
    city: string;
    icons: { id: number; label: string; icon: string }[];
    pieData: { name: string; value: number; color: string }[];
  }
> = {
  biodiversity: {
    content: "Biodiversity & Ecosystem Health",
    city: "Mumbai, India",
    icons: [
      { id: 1, label: "Biological Richness", icon: Icons?.biologicalRichness },
      { id: 2, label: "Ecosystem Health", icon: Icons?.ecosystemHealth },
      {
        id: 3,
        label: "Forest Fragmentation",
        icon: Icons?.forestFragmentation,
      },
      { id: 4, label: "Disturbance Index", icon: Icons?.distrubanceIndex },
    ],
    pieData: [
      { name: "Grassland", value: 17, color: "#8979FF" },
      { name: "Built Up Area", value: 24, color: "#FF928A" },
      { name: "Wet Land", value: 36, color: "#3CC3DF" },
      { name: "Agriculure", value: 23, color: "#FFAE4C" },
    ],
  },
  carbonAccounting: {
    content: "Carbon Accounting",
    city: "Mumbai, India",
    icons: [
      { id: 1, label: "Carbon", icon: Icons?.canopyDensity },
      { id: 2, label: "Water", icon: Icons?.biomassEnergy },
      { id: 3, label: "Wildlife", icon: Icons?.carbonStock },
      { id: 4, label: "Soil", icon: Icons?.soilMoisture },
    ],
    pieData: [
      { name: "Agriculure", value: 23, color: "#FFAE4C" },
      { name: "Grassland", value: 17, color: "#8979FF" },
      { name: "Wet Land", value: 36, color: "#3CC3DF" },
      { name: "Built Up Area", value: 24, color: "#FF928A" },
    ],
  },
  sustainableForestManagement: {
    content: "Sustainable Forest Management",
    city: "Mumbai, India",
    icons: [
      { id: 1, label: "Forest Cover", icon: Icons?.forestCover },
      { id: 2, label: "Forest Type", icon: Icons?.forestType },
      {
        id: 3,
        label: "Forest Canopy Density",
        icon: Icons?.forestCanopyDensity,
      },
      { id: 4, label: "Sites", icon: Icons?.sites },
    ],
    pieData: [
      { name: "Agriculure", value: 23, color: "#C1C7CD" },
      { name: "Grassland", value: 17, color: "#878D96" },
      { name: "Wet Land", value: 36, color: "#A2A9B0" },
    ],
  },
  catchmentManagement: {
    content: "Catchment Management",
    city: "Mumbai, India",
    icons: [
      { id: 1, label: "Forest Cover", icon: Icons?.forestCover },
      { id: 2, label: "Forest Type", icon: Icons?.forestType },
      {
        id: 3,
        label: "Forest Canopy Density",
        icon: Icons?.forestCanopyDensity,
      },
      { id: 4, label: "Sites", icon: Icons?.sites },
    ],
    pieData: [
      { name: "Agriculure", value: 23, color: "#FFAE4C" },
      { name: "Grassland", value: 17, color: "#8979FF" },
      { name: "Wet Land", value: 36, color: "#3CC3DF" },
      { name: "Built Up Area", value: 24, color: "#FF928A" },
    ],
  },
  forestProtection: {
    content: "Forest Protection",
    city: "Mumbai, India",
    icons: [
      { id: 1, label: "Forest Cover", icon: Icons?.forestCover },
      { id: 2, label: "Forest Type", icon: Icons?.forestType },
      {
        id: 3,
        label: "Forest Canopy Density",
        icon: Icons?.forestCanopyDensity,
      },
      { id: 4, label: "Sites", icon: Icons?.sites },
    ],
    pieData: [
      { name: "Agriculure", value: 23, color: "#FFAE4C" },
      { name: "Grassland", value: 17, color: "#8979FF" },
      { name: "Wet Land", value: 36, color: "#3CC3DF" },
      { name: "Built Up Area", value: 24, color: "#FF928A" },
    ],
  },
  wildlifeProtection: {
    content: "Wildlife Protection",
    city: "Mumbai, India",
    icons: [
      { id: 1, label: "Forest Cover", icon: Icons?.forestCover },
      { id: 2, label: "Forest Type", icon: Icons?.forestType },
      {
        id: 3,
        label: "Forest Canopy Density",
        icon: Icons?.forestCanopyDensity,
      },
      { id: 4, label: "Sites", icon: Icons?.sites },
    ],
    pieData: [
      { name: "Agriculure", value: 23, color: "#FFAE4C" },
      { name: "Grassland", value: 17, color: "#8979FF" },
      { name: "Wet Land", value: 36, color: "#3CC3DF" },
      { name: "Built Up Area", value: 24, color: "#FF928A" },
    ],
  },
  logout: {
    content: "",
    city: "",
    icons: [],
    pieData: [],
  },
  button: {
    content: "",
    city: "",
    icons: [],
    pieData: [],
  },
  profile: {
    content: "",
    city: "",
    icons: [],
    pieData: [],
  },
  collapse: {
    content: "",
    city: "",
    icons: [],
    pieData: [],
  },
};
