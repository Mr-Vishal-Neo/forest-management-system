// export type IconKey = "3dmap" | "legend" | "charts" | "draw" | "maps" | "geo" | 'dataset' | 'siteSelection';
export type IconKey =
  | "biodiversity"
  | "carbonAccounting"
  | "sustainableForestManagement"
  | "catchmentManagement"
  | "forestProtection"
  | "wildlifeProtection"
  | "logout"
  | "button"
  | "profile"
  | "collapse";

export type RightIconKey =
  | "findLocation"
  | "mapLayer"
  | "measure"
  | "applyModels"
  | "leaf"
  | "mountains"
  | "graph"
  | "doller";

export type LoginInputType = {
  inputLabel: string;
  inputType: string;
  inputName: string;
  inputId: string;
  inputPlaceholder?: string;
  icon?: string;
  customCls?: string;
  inputValue?: string;
  freezeInput?: boolean;
  getInputValue?: (inputEvent: unknown) => void;
  getInputToggle?: (inputEvent: unknown) => void;
  register?: unknown;
};

export type ButtonType = {
  buttonText?: string;
  getBtnState?: boolean;
  customCls?: string;
  getBtnAction?: () => void;
  type?: "button" | "submit" | "reset";
  id?: string;
};

export type SeparatorType = {
  separatorText?: string;
  separator?: boolean;
};
export type FormData = {
  userEmail: string;
  userPassword: string;
};

export type UserCredentials = {
  username: string;
  password: string;
};

export type JwtPayload = {
  exp: number;
  [key: string]: unknown;
};

export type LeftSideIconItem = {
  id: number;
  icon: string;
  tooltip: string;
  key: IconKey;
};

export type IconItem = {
  id: number;
  icon: string;
  tooltip: string;
  key: RightIconKey;
};

export type SidebarType = {
  onIconClick: (key: IconKey) => void;
  sidebarOpen: boolean;
  getToggleFn: () => void;
  sideText?: boolean;
  activePanel?: string | undefined;
};
export type SideBtnType = {
  sideBtnIcon?: string;
  sideBtnText?: string;
  sideBarText?: boolean;
  getActionFn?: (siteBtn: unknown) => void;
  isActive?: boolean;
};
export type MapComponentType = {
  position?: [number, number];
  zoom?: number;
  hasSearched?: boolean;
};
export type IconWithTooltipType = {
  icon: string;
  tooltipText?: string;
  position?: "top" | "bottom" | "left" | "right";
  customCls?: string;
  getActionFn?: () => void;
};

export type RightBarType = {
  isPanelOpen?: boolean;
  onIconClick?: (key: RightIconKey) => void;
  activeKey?: RightIconKey | null;
  handleIconClick?: (id: string) => void;
};

export type AnalyticsButtonProps = {
  isVisible?: boolean;
  onToggle?: () => void;
};
export type IconData =
  | string
  | {
      name: string;
      image: string; // base64 string or image URL
    };
export type PanelData = {
  content: string;
  city: string;
  icons: {
    id: number;
    label: string;
    icon: IconData;
  }[];
  pieData: {
    name: string;
    value: number;
    color: string;
  }[];
};
export type BiodData = Record<IconKey, PanelData>;

export type SearchComponentType = {
  sidebarOpen?: boolean;
  onSearch?: (search: string) => void | Promise<void>;
  placeHolder?: string;
  customClsform?: string;
  customClsfocus?: string;
  customClsinput?: string;
  customClsbutton?: string;
  icon?: string;
  isPanelOpen?: boolean;
};
export interface ButtonIconInterface {
  isPanelOpen?: boolean;
}

export interface InfoIconProps {
  tooltipText: string;
}
export interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: {
      name: string;
      value: number;
      color: string;
    };
  }[];
  coordinate?: {
    x: number;
    y: number;
  };
}