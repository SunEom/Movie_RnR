import Header from '../components/Header';
import { connect } from 'react-redux';
import axios from 'axios';

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => {
      dispatch({ type: 'LOGOUT', user: null });
    },
  };
};

const onClick = async (logout: any) => {
  await axios
    .get('/auth/logout')
    .then(() => {
      logout();
      window.location.href = '/';
    })
    .catch((error) => console.error(error));
};

const mapStateToProps = (state: any) => {
  return { user: state.user, onClick };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
