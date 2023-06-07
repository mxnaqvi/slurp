import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews, getReviews, deleteReview } from '../../store/reviewReducer';
import { fetchBusiness } from '../../store/businessReducer';
import './ReviewIndex.css';

const Reviews = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const reviews = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  useEffect(() => {
    dispatch(fetchReviews(businessId));
  }, [dispatch, businessId]);

  const currentUser = useSelector(state => state.session.user);

  const handleDeleteReview = (reviewId) => {
    dispatch(deleteReview(reviewId));
  };

  const filteredReviews = reviews.filter(review => review.businessId === Number(businessId));

  const renderCoffeeCups = (rating) => {
    const filledCups = Math.floor(rating);
    const emptyCups = 5 - filledCups;
    const coffeeCup = <i className="fas fa-coffee"></i>;
    const emptyCoffeeCup = <i className="fas fa-coffee empty"></i>;

    return (
      <>
        {Array(filledCups).fill(coffeeCup)}
        {Array(emptyCups).fill(emptyCoffeeCup)}
      </>
    );
  };

  return (
    <div className="reviews-container">
      <h1 className='review-header-name'>Reviews</h1>
      {filteredReviews.map(review => (
        <div key={review.id} className="review">
          <div className="review-header">
            <p className="review-user-name">{review.userFname} {review.userLname}</p>
            <div className="review-rating">{renderCoffeeCups(review.rating)}</div>
          </div>
          <p className="review-body">{review.body}</p>
          {currentUser && currentUser.id === review.userId && (
            <button onClick={() => handleDeleteReview(review.id)} className='delete-button-review-index'>Delete Review</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
