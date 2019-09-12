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
        return(
            <form>
                <div class="form-group">
                    <label for="name">Pet Name</label>
                    <input class="form-control" type='text' value={this.state.name} id='name' required/>
                </div>
                <div class="form-group">
                    <label for="image">Pet Image</label>
                    <input class="form-control" type='url' value={this.state.image} id='image' required/>
                </div>
            </form>
        )
    }
}

export default Form;