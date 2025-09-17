import { Icons } from "../assets/icons/icons";
import type { LeftSideIconItem } from "../types/types";

export const leftSideIconList: LeftSideIconItem[] = [
  {
    id: 1,
    icon: Icons?.forestManagement,
    tooltip: "Sustainable Forest Management",
    key: "sustainableForestManagement",
  },
  {
    id: 2,
    icon: Icons?.catchmentManagement,
    tooltip: "Catchment Management​",
    key: "catchmentManagement",
  },
  {
    id: 3,
    icon: Icons?.carbonAccounting,
    tooltip: "Carbon Stock Accounting​",
    key: "carbonAccounting",
  },
  {
    id: 4,
    icon: Icons?.biodivercity,
    tooltip: "Biodiversity & Ecosystem Health​",
    key: "biodiversity",
  },
  {
    id: 5,
    icon: Icons?.forestProtection,
    tooltip: "Forest Protection​",
    key: "forestProtection",
  },
  {
    id: 6,
    icon: Icons?.wildlifeProtection,
    tooltip: "Wildlife Protection​",
    key: "wildlifeProtection",
  },
  {
    id: 7,
    icon: Icons?.logout,
    tooltip: "Logout",
    key: "logout",
  },
];
