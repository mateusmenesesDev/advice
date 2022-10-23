import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.adviceslip.com/advice',
  });

export const adviceApi = {
    getAdvice: async ()=>{
        const response = await http.get('')
        return response.data.slip
    }
}