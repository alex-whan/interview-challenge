import React from 'react';
import { Link } from 'react-router-dom';
// import { colors } from '../../data/colors';

// maybe pass in color hex as props
// or fetch from dB
// React Router seems best way to handle this

const Detail = ({ match, location }) => {
  const {
    params: { hexId },
  } = match;

  // const color = colors.find(color => color.code === location.hash);
  // const hex = location.hash;

  console.log('HIT DAT DETAIL??');
  console.log('MATCH:', match);
  console.log('LOCATION:', location);
  // console.log('HEX', color.code);

  return (
    <>
      <h2 style={{ color: 'white' }}>Detail view for {hexId}</h2>
      <Link to={'/'}>Clear</Link>
    </>
  );
};

export default Detail;
