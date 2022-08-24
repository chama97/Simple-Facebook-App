import axios from "axios";

const instance = axios.create({
    //baseURL
    baseURL: 'http://localhost:4000/'
    // Header
    // timeout
})
export default instance;