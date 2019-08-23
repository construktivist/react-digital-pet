import React from 'react';

class Feed extends React.Component {
    
    handleClick() {
        console.log('Eat Food')
        this.props.eatFood(this.props.food);
    }

    render() {
        return (
            <button onClick={() => handleClick()}>Feed</button>
        )
    }

}

export default Feed;