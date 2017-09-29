import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session,
});

mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(signup(user)),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
