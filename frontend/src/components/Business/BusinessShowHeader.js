import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams } from 'react-router-dom';
import './BusinessShowHeader.css';
const placeholderImage = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80';

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
                    <h1 className="business-header-name">{business.name}</h1>
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