import Product from '../components/Product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    currentProduct: state.currentProduct,
    relatedProducts: state.relatedProducts,
    loading: state.loading,
    orderId: state.orderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
