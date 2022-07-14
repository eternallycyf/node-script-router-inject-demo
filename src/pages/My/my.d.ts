import { Effect } from "@/typings/connect";
import { Reducer } from "redux";
import { routerRedux, Subscription, Dispatch } from "dva";
import { ConnectState } from "@/typings/connect";

export interface IMyState {
  list: [];
}

export interface IDispatch extends Dispatch {}

export interface IMyModel {
  namespace: "My";
  state: IMyState;
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

export interface MyConnectType extends ConnectState {
  My: IMyState;
}
