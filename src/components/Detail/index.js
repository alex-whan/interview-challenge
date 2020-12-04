import React from 'react';
import Card from '../Card';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { hexId } = useParams();
  const hex = `#${hexId}`;

  return (
    <>
      <div className="detail">
        <Card code={hex} normalizedCode={hexId} />
        <div className="home-button">
          <Link to={'/'}>
            <button>Clear</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
