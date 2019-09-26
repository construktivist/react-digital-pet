import React from 'react';

class Exercise extends React.Component {
    render() {
        return (
            <button className="btn-primary" onClick={()=>this.props.exercise(5)}>Exercise</button>
        )
    }
}

export default Exercise;