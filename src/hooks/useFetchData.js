import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const useFetchData = (fetchFunction, dataParams) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const uniqueId = Cookies.get('userUniquid');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        return dispatch(fetchFunction({ UniqueID: uniqueId, ...dataParams }));
    };

    // Use React Query to fetch data
    const { data, isLoading, refetch } = useQuery('myData', fetchData, {
        enabled: isLoggedIn, // Fetch data only if the user is logged in
        cacheTime: 0, // Disable caching

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await refetch();
        setLoading(false);
    };
    return { data, loading, isLoading, handleSubmit};
};

export default useFetchData;
