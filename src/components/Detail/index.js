import React from 'react';
import Card from '../Card';
import { Link, useParams } from 'react-router-dom';
import randomColor from 'randomcolor';

const Detail = () => {
  const { hexId } = useParams();
  const hex = `#${hexId}`;
  const backupHexes = ['#11386b', '#5c6fbc', '#95b8f9', '#646fe5', '#439fc6'];

  // This try/catch block will inject a backup array when hitting an occasional error with fetching a random hex to prevent crashing.
  const tryRelated = () => {
    try {
      return randomColor({ count: 5, hue: hex });
    } catch (e) {
      console.log(e);
      console.error(
        'There was an error fetching the color hex. The backup hex array will be used instead.'
      );
      return backupHexes;
    }
  };
  const relatedColors = tryRelated();

  const relatedColorCards = relatedColors.map(color => (
    <Card key={color} code={color} normalizedCode={color.slice(1)} />
  ));

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
