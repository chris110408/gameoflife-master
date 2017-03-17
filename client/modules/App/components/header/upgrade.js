/**
 * Created by leichen on 2017/2/26.
 */
import React from 'react';
import Radium from 'radium'


function Upgrade(){
    return (
        <div>
                <div>
                    <a key="upgrade" href="">
                        <span key=".0">
                            Upgrade account
                        </span>
                        <i key=".1" className="material-icons" style={styles.icon} >tag_faces</i>
                    </a>
                </div>
        </div>
    )
}

const styles = {
    base:{
        display:"inline-block",
        lineHeight:"64",
        padding:"0 15px"
    },


    icon:{
        display:"inline-block",
        fontSize:"1.2rem",
        lineHeight:"64px",
        marginLeft:"0.3rem",
        marginRight: 10,
        verticalAlign:"top"
    }
};

export default Radium(Upgrade);
