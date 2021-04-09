import React, { useState } from 'react';
import Filter from './components/Filter';
import NewPerson from './components/NewPerson';
import Person from './components/Person';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filterPerson, setFilterPerson ] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    let matched = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (!newName) {
      alert('No Input Given');

    } else if (matched) {
      alert(`${newName} is already on the phonebook.`)

    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(personObject));
    }

    setNewName('');
    setNewNumber('');
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterPerson = (event) => {
    setFilterPerson(event.target.value);
  };

  const filteredPerson = filterPerson
    ? persons.filter(person => person.name.toLowerCase().search(filterPerson.toLowerCase()) !== -1)
    : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterPerson} onChange={handleFilterPerson} />
      <h2>Add a new</h2>
      <NewPerson 
      submit={addPerson}
      name={newName}
      onPersonChange={handlePersonChange}
      number={newNumber}
      onNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <ul>
      {filteredPerson.map(person => <Person person={person} />)}
      </ul>
    </div>
  )
}

export default App;