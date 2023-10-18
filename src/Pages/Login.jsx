import { Container, Row } from 'react-bootstrap';
import LoginForm from '../Components/LoginForm';
import LoginImage from '../Components/LoginImage';
 
const Login = () => {
 
    return (
                <Container fluid className="login-container">
                    <Row className="login-row">
                        {/*Right of Page*/}
                        <LoginForm />
                        {/*left of Page*/}
                        <LoginImage />
                    </Row>
                </Container> 
    )
}

export default Login;