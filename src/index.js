import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Components/Form';
import Pet from './Components/Pet';

class App extends React.Component {
    constructor() {
        super();
        let pets = localStorage.getItem('pets');
        pets ? pets = JSON.parse(pets) : pets = [];
        this.state = {
            pets: pets,
            }
    }

    addPet = (id, name, image) => {

        const pet = {
            id: id,
            name: name,
            image: image
        }

        let pets = this.state.pets.concat(pet);
        console.log(pets);
        localStorage.setItem('pets', JSON.stringify(pets));
    }

    deleteAndUpdate = (id) => {

        const newPets = this.state.pets.filter(pet => pet.id !== id);
        console.log(newPets);
        this.setState({
            pets: newPets
        })
        console.log(this.state.pets);
        let pets = this.state.pets;
        console.log(pets);
        localStorage.setItem('pets', JSON.stringify(newPets))

    }


    render () {
        
        return (
            <div className="container">
                <div className="container">
                    <Form addPet={this.addPet} />
                </div>
                <div className="row">
                    {this.state.pets.map((pet) => 
                        <Pet 
                            key={pet.id} 
                            id={pet.id} 
                            name={pet.name} 
                            image={pet.image}  
                            deleteAndUpdate={this.deleteAndUpdate}  
                            />
                    )}
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')    
)