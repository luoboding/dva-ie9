import IndexService from '../services/index';

export default {
  namespace: 'index',
  state: {
    list: [],
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    * fetch(_, { call, put }) {
      const list = yield call(IndexService.index);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          // ...result,
          list,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetch',
          });
          dispatch({
            type: 'message/fetch',
            payload: {
              searchValue: {
                pageNumber: 1,
                pageSize: 5,
              },
            },
          });
        }
      });
    },
  },
};
