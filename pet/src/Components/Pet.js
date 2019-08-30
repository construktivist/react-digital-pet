import React from 'react';
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

    feed(food) {
        const newHunger = this.state.hunger - food;
        const newWeight = this.state.weight + food;
        this.setState({
            hunger: newHunger,
            weight: newWeight
        })  
    }

    exercise(activity) {
        const newWeight = this.state.weight - activity;
        const newHappiness = this.state.happiness - activity;
        this.setState({
            weight: newWeight,
            happiness: newHappiness
        })
    }

    play(toy) {
        const newHappiness = this.state.happiness + toy;
        const newHunger = this.state.hunger + toy;
        this.setState({
            happiness: newHappiness,
            hunger: newHunger
        })
    }

    render() {
        return (
            <div>
                <div>
                    {/* <h1>Hello, I am a Pet</h1> */}
                </div>
                <div>
                    <p>Hunger: { this.state.hunger }</p>
                    <p>Weight: { this.state.weight }</p>
                    <p>Happiness: { this.state.happiness }</p>
                </div>
                <div>
                    <Feed feed={() => this.feed(10)} />
                    <Exercise exercise={() => this.exercise(10)} />
                    <Play play={() => this.play(10)} />
                </div>
            </div>
        )
    }
}

export default Pet;