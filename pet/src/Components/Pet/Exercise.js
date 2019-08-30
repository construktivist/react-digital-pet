import React from 'react';

class Exercise extends React.Component {
    render() {
        return (
            <button onClick={()=>this.props.exercise()}>Exercise</button>
        )
    }
}

export default Exercise;