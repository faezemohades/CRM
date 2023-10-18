import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { API_BASE } from "../data/apiConfig";
import axios from 'axios';
import { ThemeContext } from "../App";

const useChangePassword = () => {
    const uniqueId = Cookies.get("userUniquid")
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const { theme } = useContext(ThemeContext);

    const handleCancel = (e) => {
        e.preventDefault();
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setMessage("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword.length <= 0 || confirmPassword.length <= 0 || oldPassword.length <= 0) {
            setMessage("هیچ مقداری درج نشده است.")
            return;
        }
        if (newPassword !== confirmPassword) {
            setMessage("تکرار رمز عبور جدید یکسان نیست.")
            return;
        }
        if (newPassword.length < 6 || confirmPassword.length < 6) {
            setMessage("رمز عبور باید حداقل شامل 6 کاراکتر باشد.");
            return;
        }
        try {
            const response = await axios.post(`${API_BASE}/ChangePassword`, {
                UniqueID: uniqueId,
                Password: newPassword,
                OldPassword: oldPassword,
            });
            if (response.data.status === 0) {
                setMessage(response.data.message);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
                setMessage("");
                toast.success(response.data.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: theme === "dark" ? "dark" : "light",
                });
            }
            else if (response.data.status === 1) {

                setMessage(response.data.message)
            }
            else if (response.data.status === -1) {

                setMessage(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return { newPassword, setNewPassword, oldPassword, setOldPassword, confirmPassword, setConfirmPassword, message, handleSubmit, handleCancel };
}

export default useChangePassword;