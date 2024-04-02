import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import tagReducer from './reducers/tagReducer';

const store = createStore(tagReducer, applyMiddleware(thunk));

export default store;