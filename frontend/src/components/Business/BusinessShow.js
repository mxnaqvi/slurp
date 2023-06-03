import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from '../../store/businessReducer';

const BusinessShow = ({ businessId }) => {
  const dispatch = useDispatch();
  const business = useSelector(getBusiness(businessId));

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  if (!business) {
    return null
  }

  return (
    <div>
      <h1>{business.name}</h1>
      <p>Address: {business.address}</p>
      <p>City: {business.city}</p>
      <p>State: {business.state}</p>
      <p>Zip Code: {business.zip_code}</p>
      <p>Phone Number: {business.phone_number}</p>
      <p>Price Range: {business.price_range}</p>
      <p>Rating: {business.rating}</p>
      <p>Latitude: {business.latitude}</p>
      <p>Longitude: {business.longitude}</p>
      <p>Hours: {JSON.stringify(business.hours)}</p>
    </div>
  );
};

export default BusinessShow;
