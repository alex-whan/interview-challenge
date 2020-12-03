import React, { useState } from 'react';
import Pagination from '../Pagination';
import { colors } from '../../data/colors.js';
import { Link } from 'react-router-dom';

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

  const showColor = hex => {
    console.log(`You clicked: ${hex.code}`);
  };

  const colorList = currentEntries.map(color => {
    let code = color.code;
    let normalizedCode = color.code.slice(1);
    // console.log('COLOR CODE?', color.code);
    // console.log('SHORT CODE', color.code.slice(1));
    return (
      <Link key={color.code} to={`/color/${normalizedCode}`}>
        <li
          className="color-swatch"
          style={{ backgroundColor: code }}
          onClick={() => showColor(color)}
        >
          <div>
            <h4>{color.code}</h4>
          </div>
        </li>
      </Link>
    );
  });

  return (
    <div>
      <ul className="color-list">{colorList}</ul>

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
