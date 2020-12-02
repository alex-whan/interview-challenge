import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { colors } from '../../data/colors';

// maybe pass in color hex as props
// or fetch from dB
// React Router seems best way to handle this

const Detail = () => {
  const { hexId } = useParams();
  // const {
  //   params: { hexId },
  // } = match;

  console.log('HEX ID in DEETS?', `${hexId}`);

  // const color = colors.find(color => color.code === location.hash);
  // const hex = location.hash;

  console.log('HIT DAT DETAIL??');
  console.log('HEX??', hexId);

  return (
    <>
      <h2 style={{ color: 'white' }}>Detail view for #{hexId}</h2>
      <Link to={'/'}>Clear</Link>
    </>
  );
};

export default Detail;
