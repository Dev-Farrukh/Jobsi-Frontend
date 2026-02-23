import axios from "axios"

export const fetchSignup = async (payload) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, payload , {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.error("Caught in signup" ,  error)
        return error
    }

}

export const fetchLogin = async (payload) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, payload , {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.error("Caught in login" ,  error)
        return error
    }

}