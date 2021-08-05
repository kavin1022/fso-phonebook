import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import Filter from './Filter'
import personService from './services/persons'

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filter, setFilter] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		personService
		.getAll()
		.then(response => {
		  setPersons(response.data)
		})
	}, [persons])

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons = {persons} filter = {filter} setFilter = {setFilter} setFilteredList = {setFilteredList}/>
			

			<h2>add new</h2>
			<PersonForm persons = {persons} setPersons ={setPersons}/>

			<h2>Numbers</h2>
			<Numbers persons = {persons} setPersons ={setPersons} filter = {filter} filteredList = {filteredList}/>
		</div>
	)
}

export default App