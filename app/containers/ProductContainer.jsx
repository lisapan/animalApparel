import Product from '../components/Product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    currentProduct: state.currentProduct,
    relatedProducts: state.relatedProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
