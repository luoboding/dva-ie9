import LayoutService from '../services';

export default {
  namespace: 'layout',
  state: {
    menus: [],
    messages: [],
    notifications: [],
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
    * fetchMenus(_, { call, put }) {
      const menus = yield call(LayoutService.menus);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          menus,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetchMenus',
          });
        }
      });
    },
  },
};
