import React, { useState } from 'react';
import Pagination from '../Pagination';
import Card from '../Card';
import { colors } from '../../data/colors.js';

const List = () => {
  /////////////////
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(12);

  // Gets current page array
  const indexOfLastPage = currentPage * entriesPerPage;
  const indexOfFirstPage = indexOfLastPage - entriesPerPage;
  const currentEntries = colors.slice(indexOfFirstPage, indexOfLastPage);

  // Changes page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Each list item also needs a link to its own color detail view
  /////////////////

  // const showColor = hex => {
  //   console.log(`You clicked: ${hex.code}`);
  // };

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

{
  /* <Route exact path="/detail/:hexId" component={Detail} /> */
}
