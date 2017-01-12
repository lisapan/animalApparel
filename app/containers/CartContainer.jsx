import CartComponent from '../components/CartComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    cart: state.cart.list
  }
}

export default connect(
  mapStateToProps
)(CartComponent);
