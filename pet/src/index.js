import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Components/Form';
import Pet from './Components/Pet';

class App extends React.Component {
    constructor() {
        super();
        let pets = localStorage.getItem('pets');
        this.state = {
            pets: JSON.parse(pets)
        }
        console.log(this.state.pets)
    }
    render () {
        return (
            <div className="container">
                <div className="container">
                    <Form />
                </div>
                <div className="row">
                    {this.state.pets.map((pet) => <Pet name={pet.name} image={pet.image} />)}
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')    
)