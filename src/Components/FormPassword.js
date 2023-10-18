import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { ThemeContext } from '../App'; 
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Button } from 'react-bootstrap';
import useChangePassword from '../hooks/useChangePassword';
 
const FormPassword = () => {
   
    const { theme } = useContext(ThemeContext);
    const { newPassword, setNewPassword, oldPassword, setOldPassword, confirmPassword, setConfirmPassword, message, handleSubmit, handleCancel } = useChangePassword();

    return (
        <>
            <Form className="pass-form my-5" onSubmit={handleSubmit} style={{ border: theme === "dark" ? "0.5px solid gray" : "0.5px solid #e6e5e8" , borderRadius: '5px', padding: "40px", backgroundColor:""} }>
                <Form.Group controlId="currentPassword" className="mb-2">
                    <Form.Label className="mb-2">رمز عبور فعلی:</Form.Label>
                    <Form.Control
                        type="password"
                        className={theme === "dark" ? "dark-change-ctrl" : ""}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newPassword" className="mb-2">
                    <Form.Label className="mb-2">رمز عبور جدید:</Form.Label>
                    <Form.Control
                        type="password"
                        className={theme === "dark" ? "dark-change-ctrl" : ""}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword" className="mb-2">
                    <Form.Label className="mb-2">تأیید رمز عبور جدید:</Form.Label>
                    <Form.Control
                        type="password"
                        className={theme === "dark" ? "dark-change-ctrl" : ""}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                {message && <p className="text-danger" style={{ fontSize: "15px" }}>{message}</p>}
                <div className="pass-btn">
                    <div className="">
                        <button type="submit" className="mt-4 custom-login-button">ثبت تغییرات</button>
                    </div>
                    <div className="mx-3">
                        <Button className="mt-4" variant={theme === 'dark' ? "dark" : 'light'} onClick={handleCancel}>انصراف</Button>
                    </div>
                </div>
                <ToastContainer />
            </Form>
        </>
    )
}

export default FormPassword;