import React from 'react';

import Name from './Pet/Name';
import Avatar from './Pet/Avatar';
import Feed from './Pet/Feed';
import Exercise from './Pet/Exercise'; 
import Play from './Pet/Play';


class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunger: 0,
            weight: 0,
            happiness: 0
        }
    }

    feed = (food) => {
        const newHunger = this.state.hunger - food;
        const newWeight = this.state.weight + food;
        this.setState({
            hunger: newHunger,
            weight: newWeight
        })  
    }

    exercise = (activity) => {
        const newWeight = this.state.weight - activity;
        const newHappiness = this.state.happiness - activity;
        this.setState({
            weight: newWeight,
            happiness: newHappiness
        })
    }

    play = (toy) => {
        const newHappiness = this.state.happiness + toy;
        const newHunger = this.state.hunger + toy;
        this.setState({
            happiness: newHappiness,
            hunger: newHunger
        })
    }

    componentDidUpdate() {
        if (this.state.hunger >= 100) {
            console.log('I am hungry');
        }
    }

    render() {
        return (
            <div id={this.props.name} className="pet-container">
                <div className="name-avatar">
                    <Name name={this.props.name} />
                    <Avatar image={this.props.image} /> 
                </div>
                <div className="stats">
                    <p>Hunger: { this.state.hunger }</p>
                    <p>Weight: { this.state.weight }</p>
                    <p>Happiness: { this.state.happiness }</p>
                </div>
                <div className="buttons">
                    <Feed feed={this.feed} />
                    <Exercise exercise={this.exercise} />
                    <Play play={this.play} />
                </div>
            </div>
        )
    }
}

export default Pet;