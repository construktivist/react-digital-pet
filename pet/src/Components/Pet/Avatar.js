import React from 'react';

class Avatar extends React.Component {
    render() {
        return (
            <img className="pet-avatar" src={this.props.image} alt="Pet avatar"/>
        )
    }
}

export default Avatar;