/**
 * Created by leichen on 2017/2/24.
 */
import React, { Component } from 'react';
import {StyleRoot} from 'radium';
import { connect } from 'react-redux';


import NavBar from './components/header/navbar';
import TopMenu from './components/topMenu'
import BottomMenu from './components/bottomMenu'
import {changeStatus,changeBoardSize,changeSpeed,startPlaying,stopPlaying,clear} from './AppActions'
import {generateBoard,generateNextBoard} from '../boards/boardAction'
import Board from '../boards/board'
class App extends Component {
    componentDidMount(){
        this.props.dispatch(generateBoard(this.props.status.height,this.props.status.width))

        console.log('run')
    }



    componentWillUpdate(nextProps, nextState) {
      if(this.props.status.height!=nextProps.status.height){
          this.props.dispatch(generateBoard(nextProps.status.height,nextProps.status.width))
      }
    }
    nextGeneration = (grid) => {

        this.props.dispatch(generateNextBoard(grid))
    }
    changeGameStatus= status=>{
        this.props.dispatch(changeStatus(status))
    }


    startToPlay = (cells) =>{


            if (this.props.status.gameStatus != 'stop'){
                this.props.dispatch(generateBoard(this.props.status.height, this.props.status.width))
            }
            let interval = setInterval(()=>this.nextGeneration(cells),1000)
            this.props.dispatch(startPlaying(interval));

    }


    stopToplay =(timeid) => {
        clearInterval(timeid);
        this.props.dispatch(stopPlaying());
    }
    clearBoard=(timeid) => {
        clearInterval(timeid);
        this.props.dispatch(clear());
        this.props.dispatch(generateBoard(this.props.status.height,this.props.status.width,true))
    }
    changeBoardSize =(height,width)=>{
        this.props.dispatch(changeBoardSize(height,width))
    }

    changeSpeed= speed=>{
        this.props.dispatch(changeSpeed(speed))
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <StyleRoot>
                    <NavBar />
                    <TopMenu
                        timeid = {this.props.status.timerId}
                        startToPlay = { this.startToPlay}
                        stopToplay = {this.stopToplay}
                        clearBoard = {this.clearBoard}
                        nextGeneration={this.nextGeneration}
                        changeStatus={this.changeGameStatus}
                        generation={this.props.generation}
                        cells = {this.props.cells}
                    />
                    <Board cells={this.props.cells}/>
                    <BottomMenu changeSize={this.changeBoardSize} changeSpeed = { this.changeSpeed } timeid = {this.props.status.timerId} />
                </StyleRoot>
            </div>

        );
    }
}


function mapStateToProps(state) {

    return {
        status: state.app,
        cells:state.board.cells,
        generation:state.counter
    };
}


export default connect(mapStateToProps)(App);