import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFormSubmission from "../hooks/useFormSubmission";
 
const FormL = () => {

    const { isLoogedIn } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const { message, msg, rememberMe, handleFormSubmit, setRememberMe } = useFormSubmission();

    useEffect(() => {
        if (isLoogedIn) {
            navigate("/");
        }
        else {
            navigate("/login");
        }
    }, [isLoogedIn]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        handleFormSubmit(username, password);
    };

    return (
        <>
            <Form className="primary-color login-width" onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
                <div className="my-2" style={{ width: "100%" }}>
                    <Form.Group controlId="formUsername">
                        <Form.Label className="login-text">نام کاربری</Form.Label>
                        <Form.Control type="text" name="username" autoComplete="username" />
                    </Form.Group>
                </div>
                <Form.Group controlId="formPassword">
                    <Form.Label className="login-text">رمز عبور</Form.Label>
                    <Form.Control type="password" name="password" autoComplete="current-password" />
                </Form.Group>
                {(msg && !message) && < div className="text-danger mt-3">{msg}</div>}
                {message && <div className="text-danger mt-3">{message}</div>}

                <FormGroup controlId="formRememberMe" className='mt-3'>
                    <Form.Check
                        type="checkbox"
                        label="مرا به خاطر بسپار"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className='p-0'
                    />
                </FormGroup>

                <button type="submit" className="my-5 py-2 text-white w-100 custom-login-button" >
                    ورود به پنل
                </button>
                
            </Form>
        </>
    );
};

export default FormL;