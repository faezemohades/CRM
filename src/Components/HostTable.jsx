import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { FaTimes } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Paginations from './Paginations';
import ReusableTable from './common/ReusableTable';
import { hostColumns } from '../data/dummy';
import usePagination from '../hooks/usePagination';

const HostTable = () => {
    const { theme } = useContext(ThemeContext);
    const data = useSelector((state) => {
        return state.host;
    })

    const {
        currentPage,
        totalPages,
        currentPageData,
        handlePageChange,
        ITEMS_PER_PAGE
    } = usePagination(data?.host || []);
    
    const showPagination = data?.host?.length > ITEMS_PER_PAGE;

    //if (hostList?.length === 0) return <div className="align-self-center mt-5 bold-text" style={{ color: "#FB9678" }}> <p>رکوردی برای نمایش وجود ندارد.</p></div>

    return (
        <>
            <Row>
                <Col className="box profile-col " style={{ overflowX: 'auto' }}>
                    <ReusableTable data={currentPageData.map(item => (
                        [
                            item.name,
                            item.ip,
                            item.adminName,
                            item.isDisable ? <FaTimes size={22} color="#d52424" /> : < GiCheckMark size={22} color={theme === "dark" ? "rgb(59 235 12)" : "#009933"} />
                        ]
                    ))} columns={hostColumns} />
                    {showPagination && (
                        <div className="d-flex justify-content-end">
                            <Paginations totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
                        </div>)}
                </Col>
            </Row>
        </>
    )
}

export default HostTable;