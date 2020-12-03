import React from 'react';
import { Link } from 'react-router-dom';

function Card({ code, normalizedCode }) {
  return (
    <Link to={`/color/${normalizedCode}`}>
      <div className="color-card">
        <div className="color-block" style={{ backgroundColor: code }}></div>
        <div className="color-title">
          <h4>{code}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
