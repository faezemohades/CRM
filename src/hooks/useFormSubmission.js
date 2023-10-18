import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../store/authSlice';
import { API_BASE } from "../data/apiConfig";
import Cookies from "js-cookie";

const useFormSubmission = () => {
    const [message, setMessage] = useState("");
    const [msg, setMsg] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);

    const handleFormSubmit = async (username, password) => {

        try {
            if (!username || !password) {
                setMessage("هیچ مقداری درج نشده است.");
                return;
            }

            const apiUrl = `${API_BASE}/login`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 0) {
                    dispatch(login(data));
                    navigate("/");
                    setMsg("");
                    if (rememberMe) {
                        Cookies.set("userUniquid", data.uniqueID, { expires: 365 });
                    }
                } else {
                    setMsg(data.message);
                }
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return { message, msg, rememberMe, handleFormSubmit, setRememberMe };
}

export default useFormSubmission;