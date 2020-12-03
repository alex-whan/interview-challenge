import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { hexId } = useParams();
  const hex = `#${hexId}`;
  // const color = colors.find(color => color.code === location.hash);

  return (
    <>
      <div className="detail" style={{ backgroundColor: hex }}>
        <div className="detail-color"></div>
        <div className="detail-hex">
          <h2>{hex}</h2>
        </div>
      </div>
      <Link to={'/'}>
        <button>Clear</button>
      </Link>
    </>
  );
};

export default Detail;
