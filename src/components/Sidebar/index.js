import React from 'react';
import { COLOR_GROUPS } from './constants/color-groups';
import { Link } from 'react-router-dom';

const Sidebar = ({ getRandom, nextRandomColor, filterColor }) => {
  const colorGroups = COLOR_GROUPS.map(color => (
    <li
      key={color}
      className="sidebar-option"
      onClick={() => filterColor(color)}
    >
      <a href="#">{color}</a>
    </li>
  ));

  return (
    <>
      <div className="sidebar">
        <div className="button">
          <Link to={`/color/${nextRandomColor.code.slice(1)}`}>
            <button onClick={getRandom}>Random Color</button>
          </Link>
        </div>
        <div className="sidebar-nav">
          <ul>{colorGroups}</ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
