import React from 'react';

class Play extends React.Component {
    render () {
        return(
            <button onClick={() => this.props.play()}>Play</button>
        )
    }
}

export default Play;