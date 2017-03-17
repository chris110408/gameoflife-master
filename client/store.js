/**
 * Created by leichen on 2017/2/24.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export function configureStore(initialState = {}) {
    // Middleware and store enhancers
    const enhancers = [
        applyMiddleware(thunk),
    ];

    const store = createStore(rootReducer,  applyMiddleware(thunk));

    return store;
}