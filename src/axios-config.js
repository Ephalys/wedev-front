import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://jiraf-back.herokuapp.com'
});

export default Instance;