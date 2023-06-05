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

  return (
    <div className="business-item">
      <div className="business-image">
        <img src={placeholderImage} alt="Business" width="150" height="150" />
      </div>
      <div className="business-details">
        <h2>
          <Link to={`/businesses/${business.id}`}>{business.name}</Link>
        </h2>
        <p className="address">Address: {business.address}</p>
        <p>City: {business.city}</p>
        <p>State: {business.state}</p>
        <p>Zip Code: {business.zipCode}</p>
        <p>Rating: {generateStarRating(business.rating)}</p>
        <p>Phone Number: {business.phoneNumber}</p>
        <p>Price Range: {business.priceRange}</p>
      </div>
    </div>
  );
};

export default BusinessIndexItem;
