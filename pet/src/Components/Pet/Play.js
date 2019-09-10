import React from 'react';

class Play extends React.Component {
    render () {
        return(
            <button className="btn-primary" onClick={() => this.props.play(10)}>Play</button>
        )
    }
}

export default Play;