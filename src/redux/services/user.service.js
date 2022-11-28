import authHeader from "./auth-header.js";
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user"

export const getUserBoard = async (token) => {
    const response = await fetch(`${API_URL}/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response)
    return response.json();

};
