import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemCount, pageSize } = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) return null;
    const pages = _.range(1, pageCount + 1);

    return <div>
        <nav>
            <ul className="pagination pagination-lg">
                {pages.map(page => (
                    <li key={page} className={`page-item ${props.currentPage === page ? "active" : ""}`} onClick={() => props.onPageChange(page)}><a href="#" className="page-link" >{page}</a></li>
                ))}
            </ul>
        </nav>
    </div >;
}

export default Pagination;