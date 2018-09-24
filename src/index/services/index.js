import request from '../../utils/request';

export default {
  index() {
    return request.get('list');
  },
};
