import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchBusiness, getBusiness } from '../../store/businessReducer';
import BusinessShowHeader from './BusinessShowHeader';
import Reviews from '../Reviews/ReviewIndex';
import { fetchReviews, getReviews } from '../../store/reviewReducer';
import './BusinessShow.css';

const BusinessShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { businessId } = useParams();
  const business = useSelector(getBusiness(businessId));
  const reviews = useSelector(getReviews);
  const [hasReviewed, setHasReviewed] = useState(false);

  // Assuming you have a way to access the currentUser in your application state
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  useEffect(() => {
    dispatch(fetchReviews(businessId));
  }, [dispatch, businessId]);

  useEffect(() => {
    if (business && reviews) {
      const currentUserReview = reviews.find(review => review.userId === currentUser.id && review.businessId === business.id);
      setHasReviewed(!!currentUserReview);
    }
  }, [business, reviews, currentUser]);

  if (!business || !reviews) {
    return null;
  }

  const handleReviewForm = (event) => {
    event.preventDefault();
    if (hasReviewed) {
      const currentUserReview = reviews.find(
        (review) =>
          review.userId === currentUser.id && review.businessId === business.id
      );
      if (currentUserReview) {
        history.push(
          `/businesses/${businessId}/update-review/${currentUserReview.id}`
        );
      }
    } else {
      history.push(`/businesses/${businessId}/write-a-review`);
    }
  };

  const buttonText = hasReviewed ? "Update Review" : "Write a Review";

  return (
    <>
      <BusinessShowHeader />
      <div>
        <div className='business-show-container'>
          <div className='business-show-map'>
            this is the map
          </div>
          <div className='business-show-address'>
            <p>{business.address}</p>
            <p>{business.city}, {business.state}</p>
            <p> {business.zipCode}</p>
          </div>
          <div className='business-show-phone'>
            <p>{business.phone}</p>
          </div>
          <div className='business-show-hours'>
            <p>{JSON.stringify(business.hours)}</p>
          </div>
          <div className='business-show-contact'>
            Contact Me
          </div>
        </div>
        <div className='reviews-container'>
          <Reviews />
        </div>

       <button onClick={handleReviewForm}>{buttonText}</button>
      </div>
    </>
  );
};

export default BusinessShow;
