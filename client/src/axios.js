import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:3002'
})

export default instance;