import React from 'react';
import './StarRating.css';

const CoffeeRating = ({ rating, setRating }) => {
  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="coffee-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`coffee-cup ${value <= rating ? 'active' : ''}`}
          onClick={() => handleClick(value)}
        >
          {value <= rating ? (
            <i className="fas fa-coffee"></i>
          ) : (
            <i className="fas fa-coffee empty"></i>
          )}
        </span>
      ))}
    </div>
  );
};

export default CoffeeRating;
