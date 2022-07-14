import { IDispatch } from "./my";
export interface IProps {
  dispatch?: IDispatch;
  list?: [];
  myLoading?: boolean;
  [propsName: string]: any;
}
