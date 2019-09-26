import React from 'react';

class Play extends React.Component {
    render () {
        return(
            <button className="btn-primary" onClick={() => this.props.play(5)}>Play</button>
        )
    }
}

export default Play;