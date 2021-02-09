import Header from '../components/Header';
import { connect } from 'react-redux';
import axios from 'axios';

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => {
      dispatch({ type: 'LOGOUT' });
    },
  };
};

const onClick = async (logout: any) => {
  await axios
    .get('http://localhost:8000/auth/logout', { withCredentials: true })
    .then(() => {
      logout();
    })
    .catch((error) => console.error(error));
};

const mapStateToProps = (state: any) => {
  return { user: state.user, onClick };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
