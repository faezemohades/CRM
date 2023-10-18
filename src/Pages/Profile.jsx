import { Row, Col, Container } from 'react-bootstrap';
import Services from '../Components/Services';
import ChartLine from '../Components/Charts/ChartLine';
import ChartBar from '../Components/Charts/ChartBar';
 
const Profile = () => {

    return (
           <Container fluid className="profile profile-container" >
                    <Row className="mt-1 g-3 profile-row ">
                        <Col lg={6} md={12} sm={12} xs={12}>
                            {/*<Info />*/}
                            <ChartBar/>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <ChartLine />
                        </Col>
                    </Row>
                    <Services />
            </Container>
    )
}

export default Profile;