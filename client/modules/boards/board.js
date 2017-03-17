import React,{ PropTypes } from 'react';
import Radium from 'radium'
import { connect } from 'react-redux';
import Cell from './cell'

import {toggleCell} from './boardAction'

class Board extends React.Component{
    componentDidMount(){
       if (this.props.cells.length==30){
           console.log('start')
       }


    }
    toggleClick=(x,y)=>{
      return  this.props.dispatch(toggleCell(x,y))
    }


    render() {

        return  (<div style = { [styles.base,
                                this.props.width === 50 && styles.small,
                                this.props.width === 60 && styles.normal,
                                this.props.width === 70 && styles.big
                                ]}>
                    <div style = {[styles.container,
                                    this.props.width === 50 && styles.containerSmall,
                                    this.props.width === 60 && styles.containerNormal,
                                    this.props.width === 70 && styles.containerBig
                    ]}>
                    {
                        this.props.cells.map((row,i)=>{

                            return (<div style={styles.flexrow} key={i}>
                                {
                                    row.map((cell,j)=>{
                                        return <Cell
                                            cell={cell}
                                            key= {`${i}-${j}`}
                                            alive = {cell.status}
                                            newBorn = {cell.newBorn}
                                            toggleClick = {()=>this.toggleClick(i,j)}
                                        />

                                    })
                                }
                            </div>)
                            })
                    }
                    </div>

        </div> )

    }

}

const styles = {
    base: {
        backgroundColor:"#333",
        margin: '0px auto',
        border: '9px solid $bezel-background',
        boxShadow: '0px 16px 30px 0px #200'
    },
    containerBase:{
        position: 'absolute'
    },
    small:{
        width: '780px',
        height: '520px',
    },
    containerSmall:{
        position: 'absolute',
        margin:'30px 15px ',
    },
    normal:{
        width: '920px',
        height: '620px',
    },
    containerNormal:{
        position: 'absolute',
        margin:'10px 15px ',
    },
    big:{
        width: '1080px',
        height: '780px',
    },
    containerBig:{
        position: 'absolute',
        margin:'10px 15px ',
    },
    flexrow:{
        display:'flex'
    }

};



function mapStateToProps(state) {

    return {
        width: state.app.width,
        cells:state.board.cells
    };
}


export default connect(mapStateToProps)(Radium(Board));





