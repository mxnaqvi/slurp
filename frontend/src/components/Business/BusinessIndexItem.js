import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  return (
    <div>
       <h2>
        <Link to={`/businesses/${business.id}`}>{business.name}</Link>
      </h2>
      <p>Address: {business.address}</p>
      <p>City: {business.city}</p>
      <p>State: {business.state}</p>
      <p>Zip Code: {business.zip_code}</p>
      <p>Phone Number: {business.phone_number}</p>
      <p>Price Range: {business.price_range}</p>
      <p>Rating: {business.rating}</p>

    </div>
  );
};

export default BusinessIndexItem;