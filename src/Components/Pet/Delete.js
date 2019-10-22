import React from 'react';

function Delete(props) {
        return (
            <button className="btn-danger" onClick={()=> props.delete(props.id)}>Delete</button>
        )
}

export default Delete;