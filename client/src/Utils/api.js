import axios from "axios";
import { toast } from "react-toastify";
//import dayjs from "dayjs";

export const api = axios.create({
    baseURL: "http://full-stack-real-estate-youtube.vercel.app/api",
});

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allresd", {
            timeout: 10 * 1000,
        });

        if (response.status === 400 || response.status === 500) {
            throw response.data
        }
        return response.data

    } catch (error) {
        toast.error('Something went wrong');
        throw error;
    }

};


export const getProperty = async (id) => {

    try {
        const response = await api.get(`/residency/${id}`, {
            timeout: 10 * 1000,
        });

        if (response.status === 400 || response.status === 500) {
            throw response.data
        }
        return response.data

    } catch (error) {
        toast.error('Something went wrong');
        throw error;
    }

};


export const createUser = async (email) => {
    try {
        await api.post(`/user/register`, {email})
    } catch (error) {
        toast.error('Something went wrong');
        throw error;
    }
}


// http://full-stack-real-estate-youtube.vercel.app/api

//http://localhost:8000/api