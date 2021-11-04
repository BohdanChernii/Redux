import React from 'react';

const Pagination = ({ currentPage, goNext, goPrev, totalItems, itemsPerPage }) => {
  const isPrevDisabled = currentPage <= 0;
  const isNextDisable = totalItems / itemsPerPage > currentPage + 1;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevDisabled}>
        {!isPrevDisabled && '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextDisable}>
        {isNextDisable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
