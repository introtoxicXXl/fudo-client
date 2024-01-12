import axios from "axios";
import useAuth from './useAuth';
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    // interceptor for request
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config
    }, (err) => {

        return Promise.reject(err)
    })

    // interceptor for response
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(err);
    })

    return axiosSecure;
};

export default useAxiosSecure;