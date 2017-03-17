
import React from 'react';
import Radium from 'radium'

function Cell(props){
  return   (
        <div
            style={[styles.base,
                props.alive && styles.alive,
                props.newBorn && styles.newBorn
            ]}
            onClick={props.toggleClick}
        >
        </div>
    )
}

const styles = {
    base:{
        background:'#000',
        border: '1px solid #ddd',
        height:'1em',
        width:'1em'

    },
    alive: {
        background: '#FF5400'
    },
    newBorn:{
        background: '#FFBF00'
    }
};


export default Radium(Cell);