import React from 'react';

class Name extends React.Component {

    render() {
        return (
            <h3>{this.props.name.toUpperCase()}</h3>
        )    
    }
}

export default Name;