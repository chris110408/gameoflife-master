/**
 * Created by leichen on 2017/2/24.
 */
import {CHANGE_STATUS_TYPE,CHANGE_BOARD_SIZE,CHANGE_SPEED,GENERATE_BOARD} from './AppActions'
// Initial State






const initialState = {
    gameStatus : 'run',
    width : 50,
    height : 30,
    speed: 500,
    generation:0,
    timerId: null,
    isRunning:false
};

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_STATUS_TYPE:
            return {...state,gameStatus:action.payload}
        case CHANGE_BOARD_SIZE:
            return {...state,
                height:action.payload.height,
                width:action.payload.width
            }
        case CHANGE_SPEED:
            return {...state,speed:action.payload}
        case 'PLAY':
            return {...state,
                timerId: action.timerId,
                isRunning: true,
                gameStatus:'run'
            }
        case 'STOP':
            return {...state,
                timerId: null,
                isRuninng: false,
                gameStatus:'stop'
            }


        default:
            return state;
    }
};

export default AppReducer