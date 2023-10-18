import { Outlet, Navigate } from 'react-router-dom'
import  Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const navigate = useNavigate();
    const token = Cookies.get("userUniquid")

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token]);

    return (
        token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes
