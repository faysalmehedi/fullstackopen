import React from 'react';

const Person = ({ person }) => {
    return (
        <div>
            <li key={person.name}>{person.name} {person.number}</li>
        </div>
    )
}

export default Person;