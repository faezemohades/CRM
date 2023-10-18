import { useState } from 'react';

const ITEMS_PER_PAGE = 20;

const usePagination = (data) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages based on the data length and items per page
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    // Calculate the starting and ending indices of the current page's data
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get the current page's data
    const currentPageData = data.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return {
        currentPage,
        totalPages,
        currentPageData,
        handlePageChange,
        ITEMS_PER_PAGE
    };
};

export default usePagination;
