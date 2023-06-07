import React from 'react';
import { Link } from 'react-router-dom';
const placeholderImage = 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?resize=768,574';

const BusinessIndexItem = ({ business }) => {
  const generateStarRating = (rating) => {
    const maxRating = 5;
    const fullStar = '★';
    const emptyStar = '☆';
    const fullStars = fullStar.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? emptyStar : '';
    const emptyStars = emptyStar.repeat(maxRating - Math.ceil(rating));
    return fullStars + halfStar + emptyStars;
  };

  const priceDollars = () => {
    switch (business.priceRange) {
        case 1: 
            return '$';
        case 2:
            return '$$';
        case 3:
            return '$$$';
        case 4: 
            return '$$$$';
    };
};

  return (
    <div className="business-item">
      <div className="business-image">
        <img src={placeholderImage} alt="Business" width="150" height="150" />
      </div>
      <div className="business-details">
        <h1 className='business-name-index'>
          <Link to={`/businesses/${business.id}`}>{business.name}</Link>
        </h1>
        <p>Rating: {generateStarRating(business.rating)}</p>
        <p>Phone Number: {business.phoneNumber}</p>
        <p>Price Range: {priceDollars(business.priceRange)}</p>
      </div>
    </div>
  );
};

export default BusinessIndexItem;
