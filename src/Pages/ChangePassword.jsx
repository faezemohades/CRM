 import { Row, Col, Container } from 'react-bootstrap';
import React, { useContext } from 'react';
import FormPassword from '../Components/FormPassword';
import { ToastContainer } from 'react-toastify';
import { ThemeContext } from '../App';

const ChangePassword = () => {
    const { theme } = useContext(ThemeContext);

     return (
                <Container fluid className="login-container">
                    <Row> <Col className="mx-3 mt-4"> <h4 className="mb-0 title-theme">تغییر رمز عبور </h4></Col> </Row>
             <Row className="login-row box profile-col d-flex justify-content-center">

                 <div className="div-form-pass"  >
                            <FormPassword/>
                     </div>
                      
                    </Row>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={theme === "dark" ? "dark" : "light"}
                        style={{ fontSize: "19px", fontFamily: "Gandom" }}
                    />
                </Container>
    )
}

export default ChangePassword;