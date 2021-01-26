import axios from 'axios';

const id = window.location.pathname;
// search.split('?propertyID=')[1];

const instance = axios.create({
  baseURL: `http://localhost:3002/api/reviews/${id}`,
});

export default instance;