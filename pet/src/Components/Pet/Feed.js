import React from 'react';

class Feed extends React.Component {

    render() {
        return (
            <button onClick={() => this.props.eatFood(this.props.food)}>Feed</button>
        )
    }

}

export default Feed;