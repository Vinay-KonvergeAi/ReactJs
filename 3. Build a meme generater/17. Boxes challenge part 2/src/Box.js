import React from "react";

export default function box(props){

    const styles  ={
        backgroundColor: props.on? "#222222":"none"
    }

    return(
        <div style={styles} className="box" key={props.id}></div>
    )
}