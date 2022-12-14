import axios from "axios";

export const API_URL =  "http://localhost:9000";
//"https://my2023.onrender.com";
const URL_REFRCH = 'http://localhost:9000/users/refrechToken';

export const TOKEN_NAME = "token";

//for get method
export const doApiGet = async(_url) => {
    let refresh = false;
    
    try {
        let resp = await axios.get(_url, {
            headers: {
                "x-api-key": localStorage[TOKEN_NAME],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (error) {
        throw err;
    }
}

// For Post,delete, put, patch
export const doApiMethod = async(_url, _method, _body = {} ) => {
    let refresh = false;
    try {
        let resp = await axios({
            url: _url,
            method: _method,
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_NAME],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (error) {
        throw err;
        
    }
    
   
}
// export const loginApi = async()=>{
//     let {res} = await axios.post(API_URL+'login',data{},{withc})
// }
export const doApiDelete = async(_url, _method = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: _method,
            // data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_NAME],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (error) {
        throw err;
    }
    // {withCredentials: true}
    
}
export const refrchToken = async () =>{
    const response = await axios.post(URL_REFRCH, {}, {withCredentials: true});
    
    if (response.status === 200) {
        window.localStorage.setItem("token", response.data.token);
  
    }
}

