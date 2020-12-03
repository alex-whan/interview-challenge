import React from 'react';
import Card from '../Card';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { hexId } = useParams();
  const hex = `#${hexId}`;
  // const color = colors.find(color => color.code === location.hash);

  return (
    <>
      <div className="detail">
        <Card code={hex} normalizedCode={hexId} />
      </div>
      <div className="home-button">
        <Link to={'/'}>
          <button>Clear</button>
        </Link>
      </div>
    </>
  );
};

export default Detail;

{
  /* <div className="detail">
<div className="detail-color" style={{ backgroundColor: hex }}></div>
<div className="detail-hex">
  <h2>{hex}</h2>
</div>
</div>
<div className="home-button">
<Link to={'/'}>
  <button>Clear</button>
</Link>
</div> */
}
