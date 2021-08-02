import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import Filter from './Filter'
import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filter, setFilter] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		axios
		.get('http://localhost:3001/persons')
		.then(response => {
			const data = response.data
			setPersons(data)
	  	})
	}, [])

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons = {persons} filter = {filter} setFilter = {setFilter} setFilteredList = {setFilteredList}/>
			

			<h2>add new</h2>
			<PersonForm persons = {persons} setPersons ={setPersons}/>

			<h2>Numbers</h2>
			<Numbers persons = {persons} filter = {filter} filteredList = {filteredList}/>
		</div>
	)
}

export default App