import Product from '../components/Product';
import { connect } from 'react-redux';
import { addReview } from '../reducers/action-creators/review'

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  relatedProducts: state.relatedProducts,
  loading: state.loading,
  order_id: state.order_id
})

const mapDispatchToProps = dispatch => ({
  handleAddReview: newReview => dispatch(addReview(newReview))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
