import React from 'react';

class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunger: 0,
            weight: 0,
            happiness: 0
        }
    }

    eatFood(food) {
        const newHunger = this.state.hunger - food;
        const newWeight = this.state.weight + food;
        this.setState({
            hunger: newHunger,
            weight: newWeight
        })  
    }

    render() {
        return (
            <div>
                <h1>Hello, I am a Pet</h1>
                    <p>Hunger: { this.state.hunger }</p>
                    <p>Weight: { this.state.weight }</p>
                    <p>Happiness: { this.state.happiness }</p>
            </div>
        )
    }
}

export default Pet;