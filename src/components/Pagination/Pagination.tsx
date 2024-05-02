import React from 'react';
import './Pagination.css';
import Back from '../../assets/Left.svg';
import Next from '../../assets/Right.svg';

interface PaginationProps {
  withPagination: boolean;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function Pagination({ withPagination, currentPage, totalPages, onNext, onPrev }: PaginationProps) {
  const isLastPage = currentPage === totalPages;

  const handleNextPage = () => {
    if (!isLastPage) {
      onNext();
    }
  };

  return (
    <div className={withPagination ? 'pagination-bar-container_alt' : 'pagination-bar-container'}>
      <div className="pagination-bar-side">
        <button className="pagination-bar-side__vector" onClick={onPrev}>
          <img src={Back} alt="" />
        </button>
        <div className='pagination-bar-side-wrapper'>
          <button className="pagination-bar-side__title" style={{ alignSelf: "start" }}>Prev</button>
          <button className={withPagination ? "disabled" : 'pagination-bar-side__subtitle'}></button>
        </div>
      </div>
      <ul className={withPagination ? "pagination-bar__pagination" : "disabled"}>
        {Array.from(Array(totalPages), (item, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "pagination-button active" : "pagination-button"}
            onClick={() => {}}
          >
            {index + 1}
          </button>
        ))}
      </ul>
      <div className="pagination-bar-side">
        <div className="pagination-bar-side-wrapper">
          <button className="pagination-bar-side__title" style={{ alignSelf: "end", visibility: isLastPage ? 'hidden' : 'visible' }}>Next</button>
          <button className={withPagination || isLastPage ? "disabled" : 'pagination-bar-side__subtitle'} style={{ textAlign: 'right', alignSelf: 'flex-end', visibility: isLastPage ? 'hidden' : 'visible' }} onClick={handleNextPage}></button>
        </div>
        <button className="pagination-bar-side__vector" onClick={handleNextPage} disabled={isLastPage} style={{ visibility: isLastPage ? 'hidden' : 'visible' }}>
          <img src={Next} alt="" />
        </button>
      </div>
    </div>
  );
}
