import { Form } from 'react-bootstrap';
import BillTable2 from './BillTable2';
import Spinner from './Spinner';
import { getBill } from '../store/billSlice';
import JalaliDatePicker from './common/JalaliDatePicker';
import ReusableButton from './common/ReusableButton';
import useDate from '../hooks/useDate';
import useFetchData from '../hooks/useFetchData';
 
const BillList = () => {
    //custom hook for date
    const { startDate, endDate, startHandle, endHandle, oneDaysAgo, currentDate } = useDate();
    //custom hook for fetch and submit
    const { isLoading, loading, handleSubmit } = useFetchData(getBill, {
        StartDate: startDate,
        EndDate: endDate,
    });


    return (
            <div className="mb-4 content-list d-flex flex-column align-items-start">
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center flex-wrap mb-2">
                        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{marginLeft:"40px"} }>
                            <JalaliDatePicker
                                label="از تاریخ:"
                                value={oneDaysAgo}
                                preSelected={oneDaysAgo}
                                onChange={startHandle}
                                id="datePicker3" />
                            <JalaliDatePicker
                                label="تا تاریخ:"
                                value={currentDate}
                                preSelected={currentDate}
                                onChange={endHandle}
                                id="datePicker4" />
                        </div>
                        <ReusableButton title="جستجو" style="custom-button" />
                    </div>
                </Form>
                {/*<BillTable1 />*/}
            {loading || isLoading ? <Spinner /> : <BillTable2 />}
             </div>
    )
}

export default BillList;