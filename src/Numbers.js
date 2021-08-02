
const Numbers = ({persons, filter, filteredList}) => {

	const displayContacts = () => {
		if (filter === ""){
			return(
				persons.map(x => <p key={x.name}>
					{x.name} {x.number}
				</p>)
			)
		}
		return(
			filteredList.map(x => <p key={x.name}>
				{x.name} {x.number}
			</p>)
		)

	}

	return (<div>{displayContacts()}</div>)
}

export default Numbers