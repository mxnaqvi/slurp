import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/businessReducer';
import BusinessIndexItem from './BusinessIndexItem';

const BusinessIndex = () => {
  const dispatch = useDispatch();
  const businesses = useSelector(getBusinesses);

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);

  return (
    <div>
      <h1>Businesses</h1>
      {businesses.map((business) => (
        <div key={business.id}>
          <BusinessIndexItem business={business} />
        </div>
      ))}
    </div>
  );
};

export default BusinessIndex;