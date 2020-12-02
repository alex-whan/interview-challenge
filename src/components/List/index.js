import React from 'react';
import { colors } from '../../data/colors.js';

const List = () => {
  console.log('COLORS', colors);
  return (
    <>
      <ul>
        {colors.map(color => (
          <li style={{ backgroundColor: `{color.code}` }} key={color.code}>
            {color.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
