import Products from '../components/Products';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({products: state.products})

export default connect(
  mapStateToProps
)(Products);
