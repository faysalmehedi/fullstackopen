import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [ newName, setNewName ] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    let matched = persons.find(person => person.name === newName);
    if (!newName) {
      alert('No Input Given');
      
    } else if (matched) {
      alert(`${newName} is already on the phonebook.`)

    } else {
      const personObject = {
        name: newName,
      }

      setPersons(persons.concat(personObject));
    }

    setNewName('');
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handlePersonChange}          
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App;