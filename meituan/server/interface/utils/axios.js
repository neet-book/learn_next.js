import axios from axios

const instance = axios.create({
    baseURL: `http://${process.env.HOST || 'localhost'}: ${process.env.POST || 3000}`,
    timeout : 10000,
})