import {
  fetchBiodiversityHealthData,
  fetchCarbonAccountingData,
  fetchCatchmentData,
  fetchSustainableForestManagementData,
  fetchForestProtectionData,
  fetchWildlifeProtectionData,
} from "../services/thunks/sideBarApis";

export const sidebarApiMap: Record<string, any> = {
  biodiversity: fetchBiodiversityHealthData,
  carbonAccounting: fetchCarbonAccountingData,
  sustainableForestManagement: fetchSustainableForestManagementData,
  catchmentManagement: fetchCatchmentData,
  forestProtection: fetchForestProtectionData,
  wildlifeProtection: fetchWildlifeProtectionData,
};
