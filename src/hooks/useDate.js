import { useEffect, useState } from "react";
import moment from "moment-jalaali";

const useDate = () => {
    const currentDate = moment().format("jYYYY/jMM/jDD");
    const oneDaysAgo = moment().subtract(1, 'days').format("jYYYY/jMM/jDD");

    const [startDate, setStartDate] = useState(oneDaysAgo);
    const [endDate, setEndDate] = useState(currentDate);

    const startHandle = (unix, formatted) => {
        setStartDate(formatted);
    };

    const endHandle = (unix, formatted) => {
        setEndDate(formatted);
    };

    useEffect(() => {
        if (!startDate || !endDate) {
            // Set default values
            setStartDate(oneDaysAgo);
            setEndDate(currentDate);
        }
    }, []);

    return { startDate, endDate, startHandle, endHandle, currentDate, oneDaysAgo };
}

export default useDate;