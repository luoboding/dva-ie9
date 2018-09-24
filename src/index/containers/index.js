import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Index from '../components/index';

const mapStateToProps = state => ({
  ...state.index,
  loading: state.loading.models.index,
});

export default connect(mapStateToProps, (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
})(Index);
