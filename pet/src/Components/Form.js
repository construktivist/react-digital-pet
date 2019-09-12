import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.image]: event.target.value
        })
    }

    render (){
        return(
            <form>
                <div class="form-group">
                    <label for="name">Pet Name</label>
                    <input class="form-control" type='text' value={this.state.name} onChange={this.handleChange} id='name' name='name' required/>
                </div>
                <div class="form-group">
                    <label for="image">Pet Image</label>
                    <input class="form-control" type='url' value={this.state.image} onChange={this.handleChange} id='image' name='image' required/>
                </div>
            </form>
        )
    }
}

export default Form;