import { useSelector } from 'react-redux';
import Paginations from './Paginations';
import { billColumns } from '../data/dummy';
import ReusableTable from './common/ReusableTable';
import usePagination from '../hooks/usePagination';

const BillTable2 = () => {

    const billList = useSelector((state) => {
        return state.bill;
    })
    const {
        currentPage,
        totalPages,
        currentPageData,
        handlePageChange,
        ITEMS_PER_PAGE
    } = usePagination(billList?.bill|| []);

    const showPagination = billList?.bill?.length > ITEMS_PER_PAGE;

    if (!billList?.bill || billList?.bill?.length === 0) return <div className="align-self-center mt-5 bold-text" style={{ color: "#FB9678" }}> <p>رکوردی برای نمایش وجود ندارد.</p></div>

     return (
        <>
            <div className="table-container rounded mt-4" style={{ overflowX: "auto", width: "100%" }}>
                 {currentPageData &&
                     <ReusableTable data={currentPageData.map(item => (
                         [
                             item.row,
                             item.description,
                             item.payDescription,
                             item.insDate,
                             item.price,
                             item.newCredit,
                         ]
                     ))} columns={billColumns} />
                 }
                {/*pagination*/}
                {showPagination && (
                    <div className="d-flex justify-content-end mx-1">
                         <Paginations totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
                    </div>)}
            </div>
        </>
    )
}

export default BillTable2;