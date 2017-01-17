import Product from '../components/Product';
import { connect } from 'react-redux';
import { addReview } from '../reducers/action-creators/review'

const mapStateToProps = (state) => {

  return {
    currentProduct: state.currentProduct,
    relatedProducts: state.relatedProducts,
    reviews: state.currentProduct.reviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const productId = ownProps.currentProduct.id

  return {
    handleAddReview: (newReview, productId) => {
      return dispatch(addReview(newReview, productId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
