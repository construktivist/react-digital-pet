import React from 'react';

function Feed(props){
        return (
            <button className="btn-primary" onClick={() => props.feed(5)}>Feed</button>
        )
}

export default Feed;