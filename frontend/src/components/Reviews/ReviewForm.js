import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../../store/reviewReducer';
import { useHistory, useParams } from 'react-router-dom';
import './ReviewFormPage.css';
import StarRating from './StarRating';

const ReviewFormPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const { businessId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (body.length < 10) {
      setError('Review body must be at least 10 characters long.');
      return;
    }

    if (!rating) {
      setError('Please provide a rating.');
      return;
    }

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
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label className="form-label">Rating</label>
            <StarRating rating={rating} setRating={setRating} />
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
        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewFormPage;
