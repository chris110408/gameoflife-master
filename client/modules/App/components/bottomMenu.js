import React,{ PropTypes } from 'react';
import Radium from 'radium'
import SizeSelector from './SizeSelector'


function BottomMenu(props){
    return (
        <div style = { styles.base}>
            <SizeSelector changeSize={props.changeSize}/>
        </div>
    )
}

const styles = {
    base: {
        display:'flex',
        flexDirection: 'column',
        backgroundColor:"#333",
        width: '580px',
        margin: '0px auto 0',
    },

};



export default Radium(BottomMenu);/**
 * Created by leichen on 2017/2/28.
 */
