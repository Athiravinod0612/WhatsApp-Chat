import axios from 'axios'

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    }
    catch (error) {
        console.log("Error while addUser Api" + error.message)
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    }
    catch (error) {
        console.log("error while calling getUsers Api : " + error.message)
    }
}
export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)

    }
    catch (error) {
        console.log("Error while calling setConversation " + error.message)
    }
}