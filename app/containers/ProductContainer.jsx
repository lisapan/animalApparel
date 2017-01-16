import Product from '../components/Product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    currentProduct: state.currentProduct,
    relatedProducts: state.relatedProducts
  };
};

// Another option:
// const mapStateToProps = ({
//   currentProduct, relatedProducts
// }) => ({ currentProduct, relatedProducts })

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(
  mapStateToProps,
  dispatch => dispatch
)(Product);
