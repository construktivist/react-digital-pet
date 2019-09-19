import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Components/Form';
import Pet from './Components/Pet';

class App extends React.Component {
    constructor() {
        super();
        // let pets = localStorage.getItem('pets');
        // pets ? pets = JSON.parse(pets) : pets = [];
        let pets = [
            {
                name: 'red',
                image: 'red.com' 
            },             
            {
                name: 'blue',
                image: 'blue.com' 
            },
            {
                name: 'green',
                image: 'green.com' 
            },

        ]
        this.state = {
            pets: pets,
            }

        console.log(this.state.pets)
    }

    addPet = (name, image, event) => {

        const pet = {
            name: name,
            image: image
        }

        console.log(pet);

        let pets = this.state.pets.concat(pet);
        localStorage.setItem('pets', JSON.stringify(pets));
    }

    render () {
        return (
            <div className="container">
                <div className="container">
                    <Form addPet={this.addPet} />
                </div>
                <div className="row">
                    {/* {this.state.pets.map((pet) => <Pet name={pet.name} image={pet.image} />)} */}
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')    
)