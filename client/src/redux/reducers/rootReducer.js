import {combineReducers} from 'redux'
import enReducer from './enReducer'
import ruReducer from './ruReducer'
import translateReducer from './translateReducer'

const rootReducer = combineReducers({
  ru: ruReducer,
	en: enReducer,
	translate: translateReducer,
})

export default rootReducer
