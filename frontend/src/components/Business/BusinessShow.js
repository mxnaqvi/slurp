import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBusiness, getBusiness } from '../../store/businessReducer';
import BusinessShowHeader from './BusinessShowHeader';

const BusinessShow = () => {
  const dispatch = useDispatch();
  const {businessId} = useParams();
  const business = useSelector(getBusiness(businessId));

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  if (!business) {
    return null
  }

  return (
    <>
    <BusinessShowHeader />
    <div>
      <h1>{business.name}</h1>
      <p>Address: {business.address}</p>
      <p>City: {business.city}</p>
      <p>State: {business.state}</p>
      <p>Zip Code: {business.zipCode}</p>
      <p>Phone Number: {business.phoneNumber}</p>
      <p>Price Range: {business.priceRange}</p>
      <p>Rating: {business.rating}</p>
      <p>Latitude: {business.latitude}</p>
      <p>Longitude: {business.longitude}</p>
      <p>Hours: {JSON.stringify(business.hours)}</p>
    </div>
    </>
  );
};

export default BusinessShow;
