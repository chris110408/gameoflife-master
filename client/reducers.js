/**
 * Created by leichen on 2017/2/24.
 */



import { combineReducers } from 'redux';

// Import Reducers

import app from './modules/App/AppReducer'
import board from './modules/boards/boardReducer'
import counter from './modules/boards/counterReducer'


// Combine all reducers into one root reducer
export default combineReducers({
   app,
    board,
    counter
});