import axios from "axios";

export default { 
    sendMessage: (emailObj) => {
        return axios.post("/api/contact/send-message", emailObj);
    },

    sendChat: (userId) => {
        return axios.post("/users", userId);
    },

    checkPassword: (password) => {
        return axios.post("/support", password);
    }
};