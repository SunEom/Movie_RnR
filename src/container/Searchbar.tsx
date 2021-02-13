import { connect } from 'react-redux';
import Searchbar from '../components/Header/Searchbar';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
let keyword = '';

const onSubmit = (e: any) => {
  e.preventDefault();
  console.log(keyword);
  history.push(`/search/${keyword}`);
};

const onChange = (e: any) => {
  keyword = e.target.value;
};

const mapStateToProps = (state: any) => {
  return { onSubmit, onChange };
};

export default connect(mapStateToProps)(Searchbar);
