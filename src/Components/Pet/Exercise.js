import React from 'react';

function Exercise(props) {
        return (
            <button className="btn-primary" onClick={()=> props.exercise(5)}>Exercise</button>
        )
}

export default Exercise;