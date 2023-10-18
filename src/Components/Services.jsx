import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Spinner from './Spinner';
import HostTable from './HostTable';
import { getHost } from '../store/hostSlice';
import useFetch from '../hooks/useFetch';
 
const Services = () => {
    const { loading } = useFetch(getHost);

    return (
                <>
                <Row>
                    <Col className="mx-3 mt-4">
                        <h4 className="mb-0 title-theme">سرویس های من</h4>
                    </Col>
            </Row>
            {loading ? <Spinner /> : <HostTable/>}
         </>
  
    );
};

export default Services;
