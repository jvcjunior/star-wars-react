import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import intro from './intro'

export default combineReducers({
  router: routerReducer,
  intro
})