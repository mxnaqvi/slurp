import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams } from 'react-router-dom';
import './BusinessShowHeader.css';
const placeholderImage = 'https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,h_1200,w_1200/v1568926602/s8kjihkxpus2buax6zn0.jpg';

const BusinessShowHeader = () => { 
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    
    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [dispatch, businessId]);
    
    if (!business) {
        return null
    }
    const priceDollars = () => {
        switch (business.priceRange) {
            case 1: 
                return '$';
            case 2:
                return '$$';
            case 3:
                return '$$$';
            case 4: 
                return '$$$$';
        };
    };

    const generateStarRating = (rating) => {
        const maxRating = 5;
        const fullStar = '★';
        const emptyStar = '☆';
        const fullStars = fullStar.repeat(Math.floor(rating));
        const halfStar = rating % 1 !== 0 ? emptyStar : '';
        const emptyStars = emptyStar.repeat(maxRating - Math.ceil(rating));
        return fullStars + halfStar + emptyStars;
      };
    
    return (
        <div id='show-page-header-container'>
            <div id='show-page-header-image'>
                <img src={placeholderImage} alt="Business" width="150" height="150" />
            </div>
            <div id='show-page-header-details'>
                <div id='show-page-header-title'>
                    <h1>{business.name}</h1>
                </div>
                        <div id='show-page-header-rating'>
                            <p>{generateStarRating(business.rating)}</p>
                        </div>
                        <div id='show-page-header-price'>
                            <p>{priceDollars(business.priceRange)}</p>
                        </div>
            </div>
        </div>
    );
}

export default BusinessShowHeader;