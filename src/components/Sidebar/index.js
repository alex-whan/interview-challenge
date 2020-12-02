import React from 'react';
import { COLOR_GROUPS } from './constants/color-groups';

const Sidebar = () => {
  const viewHeight = window.outerHeight;
  // style={{ height: viewHeight }}
  return (
    <>
      <div className="sidebar" style={{ height: viewHeight / 3 }}>
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
