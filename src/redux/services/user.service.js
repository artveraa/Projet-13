import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/api/v1/user"

const getUserBoard = () => {
    return fetch(API_URL + "/profile", {headers: authHeader()})
}

export default getUserBoard();