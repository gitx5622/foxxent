import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import "../../../../styles/Pagination/pagination.scss";

const CustomPagination = ({setPage, numOfPages=10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
            <div className="custom-pagination">
                <Pagination
                    className="pagination"
                    count={numOfPages}
                    onChange={(e) =>handlePageChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                    color="secondary" />
            </div>
    );
};

export default CustomPagination;