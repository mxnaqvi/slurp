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
  const { businessId, reviewId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label className="form-label">Rating</label>
            <StarRating rating={rating} setRating={setRating} />
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
