import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews, getReviews } from '../../store/reviewReducer';
import { fetchBusiness, getBusiness } from '../../store/businessReducer';

const Reviews = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const reviews = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch, businessId]);

  const filteredReviews = reviews.filter(review => review.businessId === Number(businessId));

  return (
    <div className="reviews">
      <h1>Reviews</h1>
      {filteredReviews.map(review => (
        <div key={review.id}>
          <p> First Name: {review.userFname}</p>
          <p>Last Name: {review.userLname}</p>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
