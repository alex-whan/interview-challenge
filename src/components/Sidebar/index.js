import React from 'react';
import { COLOR_GROUPS } from './constants/color-groups';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <button>Random Color</button>
        <ul>
          {COLOR_GROUPS.map(color => (
            <li>
              <a>{color}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
