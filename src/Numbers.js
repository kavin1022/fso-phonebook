
const Numbers = ({persons, filter, filteredList}) => {

	const handleDelete = (key) => {
		console.log(key)
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