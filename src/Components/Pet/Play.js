import React from 'react';

function Play(props) {
        return(
            <button className="btn-primary" onClick={() => props.play(5)}>Play</button>
        )
}

export default Play;