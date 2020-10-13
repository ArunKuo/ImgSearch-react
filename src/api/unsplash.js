import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID d5e83cb74b50dee8a33c91f7655c89348dd2d2934cd32aa5a4d910624e13ae88"
    }
});