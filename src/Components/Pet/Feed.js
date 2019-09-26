import React from 'react';

class Feed extends React.Component {

    render() {
        return (
            <button className="btn-primary" onClick={() => this.props.feed(5)}>Feed</button>
        )
    }

}

export default Feed;