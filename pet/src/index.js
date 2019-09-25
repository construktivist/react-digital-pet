import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Components/Form';
import Pet from './Components/Pet';

class App extends React.Component {
    constructor() {
        super();
        let pets = localStorage.getItem('pets');
        console.log(pets);
        pets ? pets = JSON.parse(pets) : pets = [];
        this.state = {
            pets: pets,
            }
    }

    addPet = (name, image) => {
        const pet = {
            name: name,
            image: image
        }

        let pets = this.state.pets.concat(pet);
        console.log(pets);
        localStorage.setItem('pets', JSON.stringify(pets));
    }

    render () {
        return (
            <div className="container">
                <div className="container">
                    <Form addPet={this.addPet} />
                </div>
                <div className="row">
                    {this.state.pets.map((pet) => <Pet name={pet.name} key={pet.name} image={pet.image} />)}
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')    
)