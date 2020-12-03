import React, { useState } from 'react';
import { COLOR_GROUPS } from './constants/color-groups';
import { Link } from 'react-router-dom';
import { randomizer } from '../../utils/utils';
import { colors } from '../../data/colors';

const Sidebar = props => {
  const viewHeight = window.outerHeight;
  // style={{ height: viewHeight }}
  let initialResult = randomizer(colors);
  const [randomColor, setRandomColor] = useState(initialResult);
  const getRandom = () => {
    let result = randomizer(colors);
    setRandomColor(result);
    console.log('RANDOM COLOR IS:', result);
  };

  const colorGroups = COLOR_GROUPS.map(color => (
    <li key={color}>
      <a>{color}</a>
    </li>
  ));

  return (
    <>
      <div className="sidebar" style={{ height: viewHeight / 4 }}>
        <Link to={`/color/${randomColor.code.slice(1)}`}>
          <button onClick={getRandom}>Random Color</button>
        </Link>
        <ul>{colorGroups}</ul>
      </div>
    </>
  );
};

export default Sidebar;
