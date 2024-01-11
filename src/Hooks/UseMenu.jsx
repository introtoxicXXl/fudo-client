import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const UseMenu = () => {
    const [menu, setMenu] = useState([]);
    const axiosPublic = useAxios();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosPublic.get('/menu')
            .then(res => {
                setMenu(res.data);
                setLoading(false);
            })
    }, [axiosPublic])
    return [menu, loading];
};

export default UseMenu;