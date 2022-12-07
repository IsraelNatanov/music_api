import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9000/users/';

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        console.log(refresh);

        const response = await axios.post('refrechToken', {}, {withCredentials: true});

        if (response.status === 200) {
            
    
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;
            console.log(error.config);
            

            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});