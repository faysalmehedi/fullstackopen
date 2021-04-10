import React from 'react';

const Person = ({ person }) => {
    return (
        <div>
            <li>{person.name} {person.number}</li>
        </div>
    )
}

export default Person;