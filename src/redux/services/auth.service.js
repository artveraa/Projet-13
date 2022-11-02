import axios from "axios";

const API_URL = 'http://localhost:3001/api/v1/user';
const register = (email, password, firstname, lastname) => {
    return axios.post(API_URL + '/signup', {
        email,
        password,
        firstname,
        lastname
    });
}

const login = (email, password) => {
    return axios.post(API_URL + "/login", {
        email,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    })
};

const logout = () => {
    localStorage.removeItem("user")
}

export default {
    register,
    login,
    logout
}