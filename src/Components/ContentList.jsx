import { Form} from 'react-bootstrap';
import ContentTable from './ContentTable';
import React, { useState } from 'react';
import Spinner from './Spinner';
import { languages } from '../data/dummy'
import { getContent } from '../store/contentSlice'
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';
import ReusableButton from './common/ReusableButton';
import useFetchData from '../hooks/useFetchData';
 
const ContentList = () => {

    const [title, setTitle] = useState("");
    const [language, setLanguage] = useState("");
    const handleOptionChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
     };

    const handleTitle = (event) => {
        const selectedTiltle = event.target.value;
        setTitle(selectedTiltle);
    };

    const { isLoading, loading, handleSubmit } = useFetchData(getContent, {
        Title: title,
        Language: language
    });

    return (
        <>
            <div className="mb-4 content-list d-flex flex-column align-items-start">
                <Form onSubmit={handleSubmit }>
                    <div className="d-flex justify-content-center align-items-center flex-wrap mb-2">
                        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ marginLeft: "40px" }}>
                            <TextInput label="نام محتوا :" value={title} onChange={handleTitle} />
                            <SelectInput label="زبان محتوا:" options={languages} value={language} onChange={handleOptionChange} />
                        </div>
                        <ReusableButton title="جستجو" style="custom-button" />
                     </div>
                </Form>
                {loading || isLoading ? <Spinner /> : <ContentTable />}
             </div>
        </>
    )
}

export default ContentList;