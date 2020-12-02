import React from 'react';
import { COLOR_GROUPS } from './constants/color-groups';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const viewHeight = window.outerHeight;
  // style={{ height: viewHeight }}
  return (
    <>
      <div className="sidebar" style={{ height: viewHeight / 3 }}>
        <Link to={'/'}>
          <button>Random Color</button>
        </Link>
        <ul>
          {COLOR_GROUPS.map(color => (
            <li key={color}>
              <a>{color}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
