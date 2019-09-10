import React from 'react';

class Exercise extends React.Component {
    render() {
        return (
            <button className="btn-primary" onClick={()=>this.props.exercise(10)}>Exercise</button>
        )
    }
}

export default Exercise;