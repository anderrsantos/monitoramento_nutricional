import axios from 'axios'

const api = axios.create({
  //baseURL: "https://83f7e371ea3a.ngrok-free.app"
  baseURL:"http://localhost:3000"
 
})

export default api
