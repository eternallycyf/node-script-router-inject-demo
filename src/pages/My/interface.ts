import type { ConnectState, ConnectProps, IModel } from "@/typings/connect";

// model -> state 接口
interface IMyState {
  list: [];
}

// model 对象的接口
export type IMyModel = IModel<"My", IMyState>;

// connect -> mapStateToProps的接口
export interface IMyConnectState extends ConnectState {
  My: IMyState;
}

// 组件的props接口
export interface IMyProps extends ConnectProps {
  list?: [];
  myLoading?: boolean;
  [propsName: string]: any;
}
