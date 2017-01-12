import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import currentProductReducer from './currentProduct-reducer'
import relatedProductsReducer from './relatedProducts-reducer'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: productsReducer,
  currentProduct: currentProductReducer,
  relatedProducts: relatedProductsReducer

})

export default rootReducer
