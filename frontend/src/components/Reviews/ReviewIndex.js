import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews, getReviews } from '../../store/reviewReducer';

const Reviews = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const reviews = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch, businessId]);

  const filteredReviews = reviews.filter(review => review.businessId === businessId);

  return (
    <div className="reviews">
      <h1>Reviews</h1>
      {filteredReviews.map(review => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
