import * as service from "./service";
import { message } from "antd";
import { IMyModel } from "./my";

let MyModel: IMyModel = {
  namespace: "My",
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
  },
  effects: {
    *fetch(
      { payload: { page = 1, pageSize = 8, ...restProps } },
      { call, put },
    ) {
      const { data: list } = yield call(service.getMockMessage, {});
      yield put({
        type: "save",
        payload: {
          list,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/my") {
          dispatch({
            type: "fetch",
            payload: {},
          });
        }
      });
    },
  },
};

export default MyModel;
