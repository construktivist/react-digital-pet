import React from 'react';
import ReactDOM from 'react-dom';

import Pet from './Components/Pet';

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <Pet />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')    
)