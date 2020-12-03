import React from 'react';
import { Link } from 'react-router-dom';

function Card({ code, normalizedCode }) {
  return (
    <div className="color-card" style={{ backgroundColor: code }}>
      <Link to={`/color/${normalizedCode}`}>
        <div>
          <h4>{code}</h4>
        </div>
      </Link>
    </div>
  );
}

export default Card;
