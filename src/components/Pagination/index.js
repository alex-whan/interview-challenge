import React from 'react';

const Pagination = ({ entriesPerPage, totalEntries, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination">
        <ul>
          {pageNumbers.map(number => {
            return (
              <a
                key={number}
                onClick={() => paginate(number)}
                href="#0"
                className="page-link"
              >
                <li className="page-item">{number}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
