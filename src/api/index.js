import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10'
})

export default instance
