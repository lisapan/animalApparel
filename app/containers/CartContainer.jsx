import Cart from '../components/';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    cart: state.cart.list
  };
};

export default connect(
  mapStateToProps
)(Cart);
