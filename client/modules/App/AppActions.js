/**
 * Created by leichen on 2017/2/24.
 */
// Export Constants
export const CHANGE_STATUS_TYPE = 'CHANGE_STATUS_TYPE';
export const CHANGE_BOARD_SIZE = 'CHANGE_BOARD_SIZE';
export const CHANGE_SPEED = 'CHANGE_SPEED';
export const GENERATE_BOARD ='GENERATE_BOARD'
export const CLEAR ='CLEAR'

// Export Actions
export function changeStatus(status) {
    return {
        type: CHANGE_STATUS_TYPE,
        payload:status
    };
}


export function changeBoardSize(h,w) {
    return {
        type: CHANGE_BOARD_SIZE,
        payload:{height:h, width:w}
    };
}




export function changeSpeed(speed) {
    return {
        type: CHANGE_SPEED,
        payload:speed
    };
}

export function startPlaying(timerId) {
    return {
        type: 'PLAY',
        timerId
    };
}

export function stopPlaying(timerId) {
    return {
        type: 'STOP',
        timerId
    };
}

export function clear() {
    return {
        type: CLEAR,
    };
}