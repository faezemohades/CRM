import { Form } from 'react-bootstrap';
import { useState} from 'react';
import Spinner from './Spinner'
import TraficTable from '../Components/TraficTable';
import { typeIncome } from '../data/dummy'
import SelectInput from './common/SelectInput';
import JalaliDatePicker from './common/JalaliDatePicker';
import ReusableButton from './common/ReusableButton';
import useDate from '../hooks/useDate';
import { getTraffic } from '../store/trafficSlice'
import useFetchData from '../hooks/useFetchData';
 
const TraficList = () => {

    const [income, setIncome] = useState("");
        //custom hook for date
    const { startDate, endDate, startHandle, endHandle, oneDaysAgo, currentDate } = useDate();

    //get income value
    const handleOptionChange = (event) => {
        const selectedIncome = event.target.value;
        setIncome(selectedIncome);
    };

    const { isLoading,loading, handleSubmit } = useFetchData(getTraffic, {
        StartDate: startDate,
        EndDate: endDate,
        Source: income,
    });

    return (
        <>
            <div className="mb-4 content-list d-flex flex-column align-items-start">
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center flex-wrap mb-2">
                        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ marginLeft: "40px" }}>
                            <JalaliDatePicker
                                label="از تاریخ:"
                                value={oneDaysAgo}
                                preSelected={oneDaysAgo}
                                onChange={startHandle}
                                id="datePicker1" />
                            <JalaliDatePicker
                                label="تا تاریخ:"
                                value={currentDate}
                                preSelected={currentDate}
                                onChange={endHandle}
                                id="datePicker2" />
                            <SelectInput label="نوع درآمد:" options={typeIncome} value={income} onChange={handleOptionChange} />
                        </div>
                        <ReusableButton title="جستجو" style="custom-button" />
                    </div>
                </Form>
                {isLoading || loading ? <Spinner /> : <TraficTable/>}
            </div>
        </>
    )
}

export default TraficList;