import React from 'react';

function Dinner(props) {
    return ( 
    <div>
        <h1> Today we are serving {props.dishName} </h1>
        <h1> Today we are serving {props.sweetName}  </h1>
    </div>
    )
}
// CHILD COMPONENT
export default Dinner