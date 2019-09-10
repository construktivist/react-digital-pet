import React from 'react';
import ReactDOM from 'react-dom';

import Pet from './Components/Pet';

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')    
)