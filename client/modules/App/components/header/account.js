/**
 * Created by leichen on 2017/2/26.
 */
import React from 'react';
import Radium from 'radium'
import Upgrade from './upgrade'

function Brand(){
    return (

        <div key=".4" style={styles.divend}>
            <Upgrade />
        </div>


    )

}




const styles = {


    divend:{
        display:"flex",
        flexDirection:"row",
        flexGrow:1,
        flexShrink:0,
        justifyContent:"flex-end"
    },
    drop_down_icon:{
        marginRight:10
    }


};


export default Radium(Brand);/**
 * Created by leichen on 2017/2/26.
 */