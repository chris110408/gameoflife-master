/**
 * Created by leichen on 2017/3/1.
 */
/**
 * Created by leichen on 2017/2/24.
 */
import {GENERATE_BOARD,NEXT_BOARD,TOGGLE_CELL} from './boardAction'
import {CLEAR} from '../App/AppActions'
// Initial State






const initialState = {
    cells:[]
};


function _nextGeneration(grid = []){
    let gridHeight = grid.length;
    let gridWidth = grid[0].length;

    let calculateNeighbours = function(x,y) {
        //since the world is toroidal: if the cell is at the edge of the grid we
        //will reference the cell on the opposite edge
        let topRow = x-1 < 0 ? (gridHeight - 1) : x-1;
        let bottomRow = (x+1 === gridHeight) ? 0 : x+1;
        let leftColumn = y-1 < 0 ? (gridWidth - 1) : y-1;
        let rightColumn = (y+1 === gridWidth) ? 0 : y+1;

        let total = 0;
        total+= grid[topRow][leftColumn].status;
        total+= grid[topRow][y].status;
        total+= grid[topRow][rightColumn].status;
        total+= grid[x][leftColumn].status;
        total+= grid[x][rightColumn].status;
        total+= grid[bottomRow][leftColumn].status;
        total+= grid[bottomRow][y].status;
        total+= grid[bottomRow][rightColumn].status;

        return total;
    };
    //apply the rules of the game by comparing with the existing grid to build
    //a new array
    let gameState = [];
    for (let i = 0; i < gridHeight; i++) {
        let row = [];
        for (let j = 0; j < gridWidth; j++) {
            let cellIsAlive = grid[i][j].status;
            let neighbours = calculateNeighbours(i,j);
            if (cellIsAlive) {
                if (neighbours < 2) {
                    row.push({ status: 0 });
                } else if (neighbours > 3){
                    row.push({ status: 0 });
                } else {
                    row.push({ status: 1 });
                }
            }
            if (!cellIsAlive) {
                if (neighbours === 3) {
                    row.push({
                        status: 1,
                        newBorn: true
                    });
                } else {
                    row.push({ status: 0 });
                }
            }
        }
        gameState.push(row);
    }
    return gameState;
};


const BoardReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_CELL:

            let cells= state.cells.concat()
            let cell = cells[action.payload.x][action.payload.y]
            console.log(cell)
            if(cell.status == true){
                cell.status = !cell.status
                cell.newBorn = false
            }else{
                cell.status = !cell.status
                cell.newBorn = !cell.newBorn
            }

            console.log({...state, cells:cells})
           return {...state, cells:cells}
        case GENERATE_BOARD:

            return {...state,cells:action.payload}
        case NEXT_BOARD:
            return {...state,cells:_nextGeneration(state.cells)}
        default:
            return state;
    }
};

export default BoardReducer