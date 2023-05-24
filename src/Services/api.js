import axios from 'axios'

const Api = axios.create({
  baseUrl: 'https://sujeitoprogramador.com'
})

export default Api