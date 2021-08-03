//npx json-server --port 3001 --watch db.json
import { useState } from "react";
import axios from "axios";

const PersonForm = ({persons, setPersons}) => {
	const [newName, setNewName] = useState("");
	const [number, setNumber] = useState("");
	
	const addPerson = (event) => {
		event.preventDefault();
		let alreadyExist = false;
		let temp = [...persons];
		persons.forEach(function(name, index, array){
			if (name.name === newName){
				alert(`${newName} is already added to phonebook`);
				alreadyExist = true;
			}
		})

		if (alreadyExist === false){
			temp.push({name: newName, number: number});
			axios
			.post('http://localhost:3001/persons', {name: newName, number: number})
			.then(response => {
				setPersons(persons.concat(response.data))
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