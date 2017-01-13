import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: productsReducer,
  form: formReducer
})

export default rootReducer
