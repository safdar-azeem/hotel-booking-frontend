import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({})

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store
