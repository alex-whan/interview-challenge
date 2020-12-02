import React from 'react';
import { colors } from '../../data/colors.js';

const List = () => {
  console.log('COLORS', colors);
  return (
    <>
      <ul>
        {colors.map(color => {
          let code = color.code;
          return (
            <li
              style={{ backgroundColor: code, width: '75px', height: '75px' }}
              key={color.code}
            >
              {color.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
