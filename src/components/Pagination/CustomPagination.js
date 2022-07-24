import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./pagination.css"

function CustomPagination({page, setPage, totalNumberOfPAges}) {

    const handleChangePage = (event, newPage) => {
        window.scroll(0, 0);
        setPage(newPage);
    };

    return (
        <div className="d-flex align-items-center justify-content-center my-4">
            <Pagination
                page={page}
                variant="outlined"
                shape="rounded"
                count={totalNumberOfPAges}
                onChange={handleChangePage}
            />
        </div>
    );
}

export default CustomPagination;