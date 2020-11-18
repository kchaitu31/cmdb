import axios from "axios";



const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

instance.defaults.params = {
    apikey :process.env.REACT_APP_API_KEY
}; 
// instance.interceptors.request.use(config => {
//     config.params = config.params || {};
//     config.params['apikey'] = API_KEY;
//     return config;
// });

export default instance;