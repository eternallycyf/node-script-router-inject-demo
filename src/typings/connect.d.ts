import type { AnyAction } from "redux";
import type { EffectsCommandMap, Subscription } from "dva";
import type { RouteComponentProps } from "react-router";
import type { WrappedFormUtils } from "@ant-design/compatible/es/form/Form";
import type { IGlobalModelState } from "./global";
import type { Reducer } from "redux";

export interface Loading {
  global: boolean;
  effects: Record<string, boolean | undefined>;
  models: Record<string, boolean>;
}

export interface ConnectState {
  loading: Loading;
  global: IGlobalModelState;
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<P extends { [K in keyof P]?: string } = {}>
  extends Partial<RouteComponentProps<any>> {
  dispatch?: Dispatch;
  form?: WrappedFormUtils;
}

export interface IModel<T, U> {
  namespace: T;
  state: U;
  effects: {
    fetch: Effect;
  };
  reducers: {
    save: Reducer<any>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & {
    select: <T>(func: (state: ConnectState) => T) => T;
  },
) => void;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

/**
 * Window declare
 */
declare global {
  interface Window {
    closeTab: (pathname: string, event?: any) => void;
    refreshTab: (pathname: any) => void;
    tabChildren: {};
  }
}
