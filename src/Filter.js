	const Filter = ({persons, filter, setFilter, setFilteredList}) => {

	const filterPerson = (e) => {
		setFilter(e.target.value);
		const filterItems = (arr, query) => {
			return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
		}

		setFilteredList(filterItems(persons, e.target.value));
	}

	return(
		<div>filter phonebook<input  onChange={filterPerson} value={filter}/></div>
	)
}

export default Filter