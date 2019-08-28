import React from 'react';

class Feed extends React.Component {

    render() {
        return (
            <button onClick={() => this.props.eatFood()}>Feed</button>
        )
    }

}

export default Feed;