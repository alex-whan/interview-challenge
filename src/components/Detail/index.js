import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { hexId } = useParams();
  const hex = `#${hexId}`;
  // const color = colors.find(color => color.code === location.hash);

  return (
    <>
      <h2 style={{ color: 'white', backgroundColor: hex }}>
        Detail view for {hex}
      </h2>
      <Link to={'/'}>Clear</Link>
    </>
  );
};

export default Detail;
