import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
        }
    }

    render (){
        <form>
            <input type='string' value={this.state.name} id='name' required/>
            <input type='string' value={this.state.image} id='image' required/>
        </form>
    }
}