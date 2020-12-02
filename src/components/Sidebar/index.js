import React from 'react';
import { COLOR_GROUPS } from './constants/color-groups';

const Sidebar = () => {
  return (
    <>
      <button>Random Color</button>
      <ul>
        {COLOR_GROUPS.map(color => (
          <li>
            <a>{color}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
