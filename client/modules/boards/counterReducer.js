/**
 * Created by leichen on 2017/3/8.
 */
import {NEXT_BOARD} from './boardAction'


const counter = (state = 0, action) => {
    switch(action.type){
        case NEXT_BOARD:
            return state + 1;
        case 'CLEAR':
            return 0;
        default:
            return state;
    }
};

export default counter;