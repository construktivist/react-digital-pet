import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random() * 1001),
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

    handleSubmit = (event) => {
        this.props.addPet(this.state.id, this.state.name, this.state.image);
    }

    render (){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Pet Name</label>
                    <input className="form-control" type='text' value={this.state.name} onChange={this.handleChange} id='name' name='name' required/>
                </div>
                <div className="form-group">
                    <label>Pet Image</label>
                    <input className="form-control" type='url' value={this.state.image} onChange={this.handleChange} id='image' name='image' required/>
                </div>
                <input className="btn btn-primary" type="submit" onClick={this.handleSubmit} value="Create Pet" />
            </form>
        )
    }
}

export default Form;