import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews, getReviews, deleteReview } from '../../store/reviewReducer';
import { fetchBusiness } from '../../store/businessReducer';

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

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      {filteredReviews.map(review => (
        <div key={review.id}>
          <p>{review.userFname} {review.userLname}</p>
          <p>{review.rating}</p>
          <p>{review.body}</p>
          {currentUser && currentUser.id === review.userId && (
            <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
