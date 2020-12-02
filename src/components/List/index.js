import React, { useState } from 'react';
import Pagination from '../Pagination';
import Detail from '../Detail';
import { colors } from '../../data/colors.js';
import { Link, Route } from 'react-router-dom';

{
  /* <Route exact path={'/detail/:hexId'} exact component={Detail}></Route> */
}

const List = () => {
  // console.log('COLORS', colors);
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
    console.log(`You clicked: ${hex.code} (${hex.name})`);
  };

  const colorList = currentEntries.map(color => {
    let code = color.code;
    return (
      <Link key={color.code} to={`/color/${color.code}`}>
        <li
          className="color-swatch"
          style={{ backgroundColor: code }}
          onClick={() => showColor(color)}
        >
          <h4>{color.code}</h4>
        </li>
      </Link>
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

{
  /* <Route exact path="/detail/:hexId" component={Detail} /> */
}
