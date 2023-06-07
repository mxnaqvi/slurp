import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../../store/reviewReducer';
import { useHistory, useParams } from 'react-router-dom';
import './ReviewFormPage.css';
import StarRating from './StarRating'; // Replace 'StarRating' with the appropriate star rating component

const ReviewFormPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(0); // Initialize rating as 0
  const { businessId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewObj = {
      body,
      rating,
      business_id: businessId,
    };
    await dispatch(createReview(reviewObj, businessId, history));
  };

  return (
    <div className="review-form-container">
      <h1 className="review-form-header">Write a Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label className="form-label">Rating</label>
            <StarRating rating={rating} setRating={setRating} /> {/* Render the star rating component */}
          </div>
          <label className="form-label">Your Review</label>
          <textarea
            className="review-form-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your review here"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewFormPage;
