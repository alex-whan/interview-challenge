import React, { useState } from 'react';
import Pagination from '../Pagination';
import { colors } from '../../data/colors.js';

const List = () => {
  console.log('COLORS', colors);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(2);

  // Gets current page array
  const indexOfLastPage = currentPage * entriesPerPage;
  const indexOfFirstPage = indexOfLastPage - entriesPerPage;
  const currentEntries = colors.slice(indexOfFirstPage, indexOfLastPage);

  // Changes page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <ul>
        {colors.map(color => {
          let code = color.code;
          return (
            <li
              style={{ backgroundColor: code, width: '75px', height: '75px' }}
              key={color.code}
            >
              {color.name}
            </li>
          );
        })}
      </ul>
      <Pagination
        entriesPerPage={entriesPerPage}
        totalEntries={colors.length}
        paginate={paginate}
      />
    </>
  );
};

export default List;
