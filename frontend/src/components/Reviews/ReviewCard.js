import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {

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
    <div className="review-card">
      <div className="review-card-header">
        <h4>{review.userFname} {review.userLname}</h4>
      </div>
      <div className="review-card-rating">
        <h4>{renderCoffeeCups(review.rating)}</h4>
      </div>
      <div className="review-card-body">
        <h3>{review.body}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
