import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchBusiness, getBusiness } from '../../store/businessReducer';
import BusinessShowHeader from './BusinessShowHeader';
import Reviews from '../Reviews/ReviewIndex';
import BusinessMap from '../Map/BusinessMap';
import githubIcon from '../../assets/github-mark.png';
import linkedinIcon from '../../assets/LI-In-Bug.png';
import wellfoundIcon from '../../assets/wellfound-symbol-black.png';
import { fetchReviews, getReviews } from '../../store/reviewReducer';
import './BusinessShow.css';

const BusinessShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { businessId } = useParams();
  const business = useSelector(getBusiness(businessId));
  const reviews = useSelector(getReviews);
  const [hasReviewed, setHasReviewed] = useState(false);


  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  useEffect(() => {
    dispatch(fetchReviews(businessId));
  }, [dispatch, businessId]);

  useEffect(() => {
    if (business && reviews && currentUser) {
      const currentUserReview = reviews.find(
        review => review.userId === currentUser.id && review.businessId === business.id
      );
      setHasReviewed(!!currentUserReview);
    }
  }, [business, reviews, currentUser]);

  if (!business || !reviews) {
    return null;
  }

  const handleReviewForm = (event) => {
    event.preventDefault();
    if (hasReviewed) {
      const currentUserReview = reviews.find(
        (review) =>
          review.userId === currentUser.id && review.businessId === business.id
      );
      if (currentUserReview) {
        history.push(`/businesses/${businessId}/update-review/${currentUserReview.id}`);
      }
    } else {
      if (currentUser) {
        history.push(`/businesses/${businessId}/write-a-review`);
      } else {
        history.push('/login'); 
      }
    }
  };
  

  const buttonText = hasReviewed ? "★ Update Review" : "☆ Write a Review";

  const formatHours = (hours) => {
    const days = Object.keys(hours);
    let formattedHours = [];

    days.forEach((day) => {
      const timeRange = hours[day];
      const formattedTimeRange = timeRange.replace(" - ", " – ");

      formattedHours.push(
        <React.Fragment key={day}>
          <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {formattedTimeRange}
          <br />
        </React.Fragment>
      );
    });

    return formattedHours;
  };


  return (
    <>
      <BusinessShowHeader />
      <div className='business-show-container'>
        <div className='business-left-side'>
        <div className='business-write-review'>
          <button onClick={handleReviewForm} className='review-button'>{buttonText}</button>
        </div>
        <hr></hr>
          <h1 className="business-show-location-header">Location & Hours</h1>
          <div className='business-show-location-and-hours'>
            <div className='business-show-location-left'>
              <div className='business-show-map'>
                <BusinessMap business={business} />
              </div>
              <div className='business-show-address'>
                <p>{business.address}</p>
                <p>{business.city}, {business.state}</p>
                <p>{business.zipCode}</p>
              </div>
            </div>
            <div className='business-show-hours'>
              <p>{formatHours(business.hours)}</p>
            </div>
          </div>
          <hr></hr>
          <div className='reviews-container'>
            <Reviews />
          </div>
        </div>
        <div className='business-right-side'>
        {/* <div className='business-show-portfolio'>
            <div className='business-show-contact-header'> 
            Portfolio 
            </div>
            
          </div> */}
          <div className='business-show-contact'>
            <div className='business-show-contact-header'> 
            Contact Me 
            </div>
            <div className='business-show-links'>
            <a id="contact-me" href="https://github.com/mxnaqvi/">
                <img src={githubIcon} alt="GitHub" className="icon" />
                GitHub
              </a>
              <a id="contact-me" href="https://www.linkedin.com/in/mohammadalinaqvi/">
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                LinkedIn
              </a>
              <a id="contact-me" href="https://wellfound.com/u/mohammad-naqvi-6">
                <img src={wellfoundIcon} alt="Wellfound" className="icon" />
                Wellfound
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessShow;