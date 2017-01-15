import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import currentProductReducer from './currentProduct-reducer'
import relatedProductsReducer from './relatedProducts-reducer'
//import cartReducer from './cart-reducer'
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: productsReducer,
  currentProduct: currentProductReducer,
  relatedProducts: relatedProductsReducer,
  //cart: cartReducer,
  form: formReducer

})

export default rootReducer
