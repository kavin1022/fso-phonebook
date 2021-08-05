import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl);
}

const create = newObject => {
  return axios.post(baseUrl, newObject);
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
}

const deleteEntry = (id) => {
  const url = `${baseUrl}/${id}`;
  axios.delete(url);
  return axios.get(baseUrl)
}

const personService = {
  getAll,
  create,
  update,
  deleteEntry
};

export default personService