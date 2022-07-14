import { Effect } from "@/typings/connect";
import { Reducer } from "redux";
import { routerRedux } from "dva";

export interface IMyState {
  list: [];
}

export interface ILoginModel {
  namespace: "My";
  state: IMyState;
  effects: {
    fetch: Effect;
  };
  reducers: {
    save: Reducer<any>;
  };
}
