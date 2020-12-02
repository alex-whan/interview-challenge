import React, { useState } from 'react';
import Pagination from '../Pagination';
import { colors } from '../../data/colors.js';
import { Link, Route, useRouteMatch } from 'react-router-dom';

const List = ({ match }) => {
  console.log('COLORS', colors);
  const url = useRouteMatch();

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

  const showColor = hex => {
    console.log(`You clicked: ${hex.code} (${hex.name})`);
  };

  const colorList = currentEntries.map(color => {
    let code = color.code;
    return (
      <li
        className="color-swatch"
        key={color.code}
        style={{ backgroundColor: code }}
        onClick={() => showColor(color)}
      >
        <Link to={`${url}/${code}`}>
          <h4>{color.code}</h4>
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className="color-list">{colorList}</ul>
      <Pagination
        entriesPerPage={entriesPerPage}
        totalEntries={colors.length}
        paginate={paginate}
      />
    </>
  );
};

export default List;
