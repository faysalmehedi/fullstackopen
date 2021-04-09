import React from 'react';

const NewPerson = ({ submit, name, number, onPersonChange, onNumberChange }) => {
    return (
        <div>
            <form onSubmit={submit}>
            <div>
                name: <input 
                value={name}
                onChange={onPersonChange}          
                />
            </div>
            <div>
                number: <input 
                value={number}
                onChange={onNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            </form>
        </div>
    )
}


export default NewPerson;