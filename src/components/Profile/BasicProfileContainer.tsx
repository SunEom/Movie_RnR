import BasicProfilePresenter from './BasicProfilePresenter';
import { connect } from 'react-redux';

const mapStateToProps = (state: any, props: any) => {
  return {
    user: props.user,
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(BasicProfilePresenter);
