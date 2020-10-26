import React from 'react';
import './Pagination.scss';
interface PaginationProps {
    total?: number;
    pageSize?: number;
    pageNumber?: number;
    simple?: boolean;
    hideIfOnePage?: boolean;
    onPageChange?: (pageNumber: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
