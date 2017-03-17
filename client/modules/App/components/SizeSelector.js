/**
 * Created by leichen on 2017/2/28.
 */
import React,{ PropTypes } from 'react';
import Radium from 'radium'

function SizeSelector(props){
    return (
        <div style = { styles.base}>
            <button style = { styles.button } onClick={()=>props.changeSize(30,50)}>Size:50x30</button>
            <button style = { styles.button }  onClick={()=>props.changeSize(40,60)}>Size:70x50</button>
            <button style = { styles.button }  onClick={()=>props.changeSize(50,70)}>Size:100x80</button>
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



export default Radium(SizeSelector);/**
 * Created by leichen on 2017/2/28.
 */
