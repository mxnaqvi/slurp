import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchBusiness, getBusiness } from '../../store/businessReducer';
import BusinessShowHeader from './BusinessShowHeader';
import Reviews from '../Reviews/ReviewIndex';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchReviews, getReviews } from '../../store/reviewReducer';

const BusinessShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { businessId } = useParams();
  const business = useSelector(getBusiness(businessId));
  const reviews = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  useEffect(() => {
    dispatch(fetchReviews(businessId));
  }, [dispatch, businessId]);

  if (!business || !reviews) {
    return null;
  }

  const filteredReviews = reviews.filter(review => review.businessId === businessId);

  const handleReviewForm = (event) => {
    event.preventDefault();
    history.push(`/businesses/${businessId}/write-a-review`);
  };

  return (
    <>
      <BusinessShowHeader />
      {/* {console.log(reviews)} */}
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

        <div className='reviews-container'>
          {/* <Reviews /> */}
          {console.log(filteredReviews)}
        </div>

        <button onClick={handleReviewForm}>Write a Review</button> {/* Add the button with the onClick event */}
      </div>
    </>
  );
};

export default BusinessShow;
