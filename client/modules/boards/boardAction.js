/**
 * Created by leichen on 2017/3/1.
 */
/**
 * Created by leichen on 2017/2/24.
 */
// Export Constants

export const GENERATE_BOARD ='GENERATE_BOARD'
export const NEXT_BOARD = 'NEXT_BOARD'
export const TOGGLE_CELL = 'TOGGLE_CELL'
// Export Actions


export function _generateBoard(height,width,bool){
    let cells=[];
    console.log(width)
    for (let row = 0; row < height; row++) {

        let rowArray = []
        for (let col = 0; col < width; col++) {

           let value = Math.random() > 0.85
            value = Math.random() >0.85
            if (bool == true){
               value = 0
            }
            rowArray.push({h:row,w:col,status:value, newBorn:value})
            }
        cells.push(rowArray);
        }
     return cells;
}

export function toggleCell (x,y){
    return {
        type: TOGGLE_CELL,
        payload:{x:x,
                y:y
               }
    }


}

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





export function generateBoard(height,width,bool){
    console.log(height,width)
    return {
        type: GENERATE_BOARD,
        payload:_generateBoard(height,width,bool)
    };
}



export function generateNextBoard(grid){

        return {
            type: NEXT_BOARD,
            payload:_nextGeneration(grid)
        }


}