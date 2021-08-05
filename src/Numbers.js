import personService from "./services/persons"
const Numbers = ({persons, setPersons, filter, filteredList}) => {

	const handleDelete = (id) => {
		personService
		.deleteEntry(id)
		.then(response => {
			setPersons(response.data)
		})
	}

	const displayContacts = () => {
		if (filter === ""){
			return(
				persons.map(x => <p key={x.name}>
					{x.name} {x.number} <button onClick={() => handleDelete(x.id)}>Delete</button>
				</p>)
			)
		}

		return(
			filteredList.map(x => <p key={x.name}>
				{x.name} {x.number} <button onClick={() => handleDelete(x.id)}>Delete</button>
			</p>)
		)

	}

	return (<div>{displayContacts()}</div>)
}

export default Numbers