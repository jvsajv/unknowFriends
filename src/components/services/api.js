import axios from 'axios';

// APEX API KEY: DyF5BQl8OHoj6XJaAsiq
// FROM https://apexlegendsapi.com/
const api = axios.create({
  baseURL: 'https://api.mozambiquehe.re',
});

export default api;