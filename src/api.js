import axios from "axios";

const baseURL = "https://api.spoonacular.com/recipes";

// Set config defaults when creating the instance
const api = axios.create({
    baseURL: `${baseURL}`,
});

export default api;
