import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((user, index) => ({ ...user, pageNum: currentPage + 1, index }));
  
  return {
    currentPage: paginatedData,
    nextPage,
    prevPage,
    totalPages
  };
};

export default usePagination;
