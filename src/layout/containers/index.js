import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import Layout from '../components/index';
import * as actions from '../actions';

const mapStateToProps = state => ({
  ...state.layout,
  loading: state.loading.models.layout,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
