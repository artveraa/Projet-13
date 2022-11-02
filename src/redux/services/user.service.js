import authHeader from "./auth-header";
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user"

const getUserBoard = () => {
    return axios.get(API_URL + "/profile", {headers: authHeader()})
}

export default getUserBoard();