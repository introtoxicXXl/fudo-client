import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://fudo-server-hwvlmuaol-minhazs-projects.vercel.app"
})
const useAxios = () => {

    return axiosPublic;
};

export default useAxios;