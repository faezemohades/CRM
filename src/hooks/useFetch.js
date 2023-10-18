import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetch = (fetchFunction) => {
    const uniqueId = Cookies.get("userUniquid")
    const { isLoggedIn } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(fetchFunction(uniqueId));
            setLoading(false);
        };
        if (isLoggedIn) {
            fetchData();
        }
    }, []);

    return { loading };
}

export default useFetch;