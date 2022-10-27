import axios from "axios";

export const API_URL =  "http://localhost:9000";
//"https://my2023.onrender.com";
// export const API_URL = "https://monkeys.co.il";
export const TOKEN_NAME = "token";

//for get method
export const doApiGet = async(_url) => {
    
    try {
        let resp = await axios.get(_url, {
            headers: {
                "x-api-key": localStorage[TOKEN_NAME],
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}

// For Post,delete, put, patch
export const doApiMethod = async(_url, _method, _body = {}) => {
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
    } catch (err) {
        throw err;
    }
}
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
    } catch (err) {
        throw err;
    }
}