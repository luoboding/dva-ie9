import request from '../../utils/request';

export default {
  menus() {
    return request.get('menus');
  },
};
