import axios from 'axios'
import { VITE_ENV_CONFIG } from '../config/env.config'

export const authAPi = axios.create({
    baseURL:`${VITE_ENV_CONFIG.VITE_SERVER_URI}/users`,
    withCredentials:true
})
