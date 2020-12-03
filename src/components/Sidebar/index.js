import React, { useState } from 'react';
import { COLOR_GROUPS } from './constants/color-groups';
import { Link } from 'react-router-dom';
import { randomizer } from '../../utils/utils';
import { colors } from '../../data/colors';

const Sidebar = props => {
  let initialResult = randomizer(colors);
  const [randomColor, setRandomColor] = useState(initialResult);
  const getRandom = () => {
    let result = randomizer(colors);
    setRandomColor(result);
    // console.log('RANDOM COLOR IS:', result);
  };

  const colorGroups = COLOR_GROUPS.map(color => (
    <li key={color} className="sidebar-option">
      <a href="#">{color}</a>
    </li>
  ));

  return (
    <>
      <div className="sidebar">
        <div className="button">
          <Link to={`/color/${randomColor.code.slice(1)}`}>
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
