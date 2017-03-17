/**
 * Created by leichen on 2017/2/26.
 */
import React from 'react';
import Radium from 'radium'

function Brand(){
    return (
        <span key=".1" style={[styles.brand]} title="#"> Game of life </span>
    )

}




const styles = {
    brand:{
        fontSize:"1.4rem",
        flexShrink:1
    }
};


export default Radium(Brand);