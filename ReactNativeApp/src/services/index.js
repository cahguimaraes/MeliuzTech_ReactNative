import axios from 'axios'

const API = axios.create({
    baseURL: 'https://sistemadeagendamento-san5v.ondigitalocean.app/'
});

export default API;