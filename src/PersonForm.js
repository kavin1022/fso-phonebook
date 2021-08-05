//npx json-server --port 3001 --watch db.json
import { useState } from "react";
import personService from './services/persons'

const PersonForm = ({persons, setPersons}) => {
	const [newName, setNewName] = useState("");
	const [number, setNumber] = useState("");

	const searchIfExist = () => {
		persons.forEach(function(name, index, array){
			if (name.name === newName){
				alert(`${newName} is already added to phonebook`);
				return true;
			}
		})
		return false;
	}
	
	const addPerson = (event) => {
		event.preventDefault();
		let alreadyExist = searchIfExist();

		if (alreadyExist === false){
			personService
			.create({name: newName, number: number})
			.then(response => {
				setPersons(persons.concat(response.data));
			})
		}

		setNewName("");
		setNumber("");
	}

	return (
		<form onSubmit={addPerson}>
			<div>name: <input  onChange={(e) => setNewName(e.target.value)} value={newName}/></div>
			<div>number: <input  onChange={(e) => setNumber(e.target.value)} value={number}/></div>
			<div><button type="submit">add</button></div>
		</form>
	)
}

export default PersonForm