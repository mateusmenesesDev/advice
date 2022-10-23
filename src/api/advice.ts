export const adviceApi = {
    getAdvice: async ()=>{
        try {
            const http = await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
            const response = await http.json()
            return response.slip
        }
        catch{
            alert('ouve algum problema. Tente novamente mais tarde!')
        }
    }
}