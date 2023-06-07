import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewCard from './ReviewCard';
import { fetchReviews } from '../../store/reviewReducer';
import './RecentActivity.css';

const RecentActivity = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  if (!reviews || Object.keys(reviews).length === 0) {
    return <div>No recent reviews</div>;
  }

  const recentReviews = Object.values(reviews)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <div className='recent-activity'>
      <h1 className='recent-activity-header'>Recent Activity</h1>
      <div className='review-cards-container'>
        {recentReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
