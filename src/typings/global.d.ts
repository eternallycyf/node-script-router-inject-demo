declare module "*.css";
declare module "*.less";
declare module ".svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "*.x1sx";

export interface IGlobalModelState {
  theme: "dark" | "light";
  collapsed: boolean;
  showTagNav: boolean;
  showNotice: boolean;
  showFul1Screen: boolean;
  siderMenuState: "1" | "2";
}
