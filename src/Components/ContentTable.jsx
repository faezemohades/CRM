import { useContext, useState } from 'react';
import ContentModal from '../Components/ContentModal';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../App';
import { GiCheckMark } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { getContentCode } from '../store/contentCodeSlice';
import { contentColumns } from '../data/dummy';
import ReusableTable from './common/ReusableTable';
import usePagination from '../hooks/usePagination';
import Paginations from './Paginations';
import Cookies from 'js-cookie';

const ContentTable = () => {

    const uniqueId = Cookies.get("userUniquid")
    const [selectedContentTitle, setSelectedContentTitle] = useState("");
    const { theme } = useContext(ThemeContext);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch()
    const contentList = useSelector((state) => {
        return state.content;
    })

    const {
        currentPage,
        totalPages,
        currentPageData,
        handlePageChange,
        ITEMS_PER_PAGE
    } = usePagination(contentList?.content || []);

    const showPagination = contentList?.content?.length > ITEMS_PER_PAGE;

    // send contentId to api and get data
    const handleButtonClick = async(contentID, contentTitle) => {
        setModalShow(true)
        await dispatch(getContentCode({
            ID: contentID,
            UniqueID: uniqueId
        }));
        setSelectedContentTitle(contentTitle);
    };

    if (!contentList?.content || contentList?.content?.length === 0) return <div className="align-self-center mt-5 bold-text" style={{ color:"#FB9678"} }> <p>رکوردی برای نمایش وجود ندارد.</p></div>

    return (
        <>
            <div className="table-container mt-4 " style={{ overflowX: "auto", width: "100%" }}>
                <ReusableTable data={currentPageData.map(item => (
                    [
                        item.row,
                        item.contentTitle,
                        item.contentEnName,
                        item.language,
                        item.contentState === 'فعال' ? (
                            <GiCheckMark size="22" color={theme === "dark" ? "rgb(59 235 12)" : "#009933"} />
                        ) : (
                            item.contentState
                        ),
                        item.releaseYear,
                        <Button
                            variant={theme === "dark" ? "dark" : "light"}
                            className="my-1 py-1"
                            style={{
                                border: "1px solid #03C9D7", fontSize: "13px"
                            }} onClick={() => handleButtonClick(item.contentID, item.contentTitle)}>
                            مشاهده کدها
                        </Button>
                    ]
                ))} columns={contentColumns} />
                {/* Pagination */}
                {showPagination && (
                    <div className="d-flex justify-content-end mx-1">
                        <Paginations totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
                    </div>)}
            </div>
            <ContentModal show={modalShow} close={() => setModalShow(false)} setModalShow={setModalShow} contentTitle={selectedContentTitle} />
        </>
    )
}

export default ContentTable;