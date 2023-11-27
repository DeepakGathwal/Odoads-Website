import axios from "axios";

const instance =  axios.create({baseURL:process.env.REACT_APP_URL})
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
instance.defaults.withCredentials = true;

export default instance;
