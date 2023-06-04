import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/businessReducer';
import BusinessIndexItem from './BusinessIndexItem';
import './BusinessIndex.css';

const BusinessIndex = () => {
  const dispatch = useDispatch();
  const businesses = useSelector(getBusinesses);

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);

  return (
    <div className="business-index-container">
      <div className="business-header">
        <h1>Businesses</h1>
        <p>Showing {businesses.length} results</p>
      </div>
      {businesses.map((business) => (
        <div className="business-item" key={business.id}>
          <BusinessIndexItem business={business} />
        </div>
      ))}
    </div>
  );
};

export default BusinessIndex;
