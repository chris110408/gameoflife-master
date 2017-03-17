import React,{ PropTypes } from 'react';
import Radium from 'radium'

function TopMenu(props){
    return (
        <div style = { styles.base}>
            <button style = { styles.button } onClick={()=>props.nextGeneration(props.cells)}>next</button>
            <button style = { styles.button } onClick={()=>props.startToPlay(props.cells)}>Run</button>
            <button style = { styles.button}  onClick={()=>props.stopToplay(props.timeid)}>Pause</button>
            <button style = { styles.button} onClick={()=> props.clearBoard(props.timeid)}>Clear</button>
            <div style = { styles.counter}> generation:
                <span>{props.generation}</span>
            </div>
        </div>
    )
}

const styles = {
    base: {
        display:'flex',
        flexDirection: 'row',
        backgroundColor:"#333",
        width: '580px',
        height:"40px",
        margin: '65px auto 0',
        paddingTop:'5px',
        boxShadow:'0px 16px 30px 0px #200',
        flexWrap:'nowrap',
        justifyContent:'center'
    },
    button:{
        display:'inline-block',
        width:'100px',
        margin: '0 8px 4px 8px',
        fontSize: '15px'
    },
    counter: {
        margin:'4px 0 8px 2px',
        fontFamily: 'courier',
        fontSize:'15px',
        color:'#ddd',

    }
};

TopMenu.prototype ={
    changeStatus:React.PropTypes.func.isRequired,
    generation:PropTypes.number.isRequired
}

export default Radium(TopMenu);

