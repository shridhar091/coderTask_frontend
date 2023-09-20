import { createStore, combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducers from '../reducer/userReducers'


const configureStore = () => {
    const store = createStore(combineReducers({
        user:userReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore