import React, { useState } from 'react';
import Pagination from '../Pagination';
import Card from '../Card';

const List = ({ colors }) => {
  // Component-level pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(12);

  // Determines current page from array
  const indexOfLastPage = currentPage * entriesPerPage;
  const indexOfFirstPage = indexOfLastPage - entriesPerPage;
  const currentEntries = colors.slice(indexOfFirstPage, indexOfLastPage);

  // Changes page on-click
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const colorList = currentEntries.map(color => {
    let code = color.code;
    let normalizedCode = color.code.slice(1);
    return <Card key={code} code={code} normalizedCode={normalizedCode} />;
  });

  return (
    <div className="color-swatch-section">
      <div className="color-list">{colorList}</div>
      <Pagination
        entriesPerPage={entriesPerPage}
        totalEntries={colors.length}
        paginate={paginate}
      />
    </div>
  );
};

export default List;
