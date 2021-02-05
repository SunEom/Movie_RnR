import Header from '../components/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  return { user: state.user };
};

export default connect()(Header);
