import React from 'react';
import Radium from 'radium'
import Brand from './brand'
import Account  from './account'

function NavBar(){
    return (
        <div>
            <nav key="0" style={[
                styles.base,
            ]}>
                <Brand />
                <Account/>
            </nav>
        </div>
    )
}

const styles = {
    base: {
        backgroundColor:"#E57C21",
        color:"#fff",
        display: 'flex',
        height:"64px",
        width:"100%",
        flexDirection: 'row',
    },

};

export default Radium(NavBar);
