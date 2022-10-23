export const adviceApi = {
    getAdvice: async ()=>{
        const http = await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        const response = await http.json()
        return response.slip
    }
}