import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const UseMenu = () => {
    const [menu, setMenu] = useState([]);
    const axiosSecure = useAxios();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosSecure.get('/menu')
            .then(res => {
                setMenu(res.data);
                setLoading(false);
            })
    }, [axiosSecure])
    return [menu, loading];
};

export default UseMenu;