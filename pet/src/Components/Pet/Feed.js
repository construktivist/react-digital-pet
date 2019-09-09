import React from 'react';

class Feed extends React.Component {

    render() {
        return (
            <button onClick={() => this.props.feed(10)}>Feed</button>
        )
    }

}

export default Feed;