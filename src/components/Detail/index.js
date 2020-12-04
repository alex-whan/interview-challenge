import React from 'react';
import Card from '../Card';
import { Link, useParams } from 'react-router-dom';
import randomColor from 'randomcolor';

const Detail = () => {
  const { hexId } = useParams();
  const hex = `#${hexId}`;
  const relatedColors = randomColor({ count: 5, hue: hex });
  const relatedColorCards = relatedColors.map(color => (
    <Card key={color} code={color} normalizedCode={color.slice(1)} />
  ));

  console.log('realted colors', relatedColorCards);

  return (
    <>
      <div className="detail">
        <Card code={hex} normalizedCode={hexId} />
        <div className="related-colors">{relatedColorCards}</div>
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
