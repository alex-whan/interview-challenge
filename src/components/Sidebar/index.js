import React from 'react';
import { COLOR_GROUPS } from './constants/color-groups';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <button>Random Color</button>
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
