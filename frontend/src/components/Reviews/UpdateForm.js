import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../store/reviewReducer';
import { useHistory, useParams } from 'react-router-dom';
import './ReviewFormPage.css';
import StarRating from './StarRating';

const UpdateFormPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState(''); // Add error state
  const { businessId, reviewId } = useParams();

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
    await dispatch(updateReview(reviewObj, reviewId));
    history.push(`/businesses/${businessId}`);
  };

  return (
    <div className="review-form-container">
      <h1 className="review-form-header">Update Your Review</h1>
      {error && <div className="error-message">{error}</div>} 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label className="form-label">Rating</label>
            <StarRating rating={rating} setRating={setRating} required />
          </div>
          <label className="form-label">Body</label>
          <textarea
            className="review-form-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </div>
  );
};


export default UpdateFormPage;
