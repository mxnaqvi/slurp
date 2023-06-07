import csrfFetch from './csrf';

const RECIEVE_REVIEWS = 'reviews/RECIEVE_REVIEWS';
const RECIEVE_REVIEW = 'reviews/RECIEVE_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const recieveReviews = (reviews) => ({
    type: RECIEVE_REVIEWS,
    reviews
});

export const recieveReview = (review) => ({
    type: RECIEVE_REVIEW,
    review
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReviews = (state) => {
    if (state.reviews) {
        return Object.values(state.reviews);
    } else {
        return [];
    }
}

export const getReview = (state, reviewId) => {
    if (state.reviews) {
        return state.reviews[reviewId];
    } else {    
        return null;
    }
}

export const fetchReviews = () => async (dispatch) => {
    const response = await csrfFetch('/api/reviews');
    const reviews = await response.json();
    dispatch(recieveReviews(reviews));
}

export const fetchReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`);
    const review = await response.json();
    dispatch(recieveReview(review));
}

export const createReview = (reviewObj, businessId, history) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewObj)
    });
    const newReview = await response.json();
    dispatch(recieveReview(newReview));
    history.push(`/businesses/${businessId}`);
    return response
}

export const updateReview = (reviewObj, reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewObj)
    });
    const updatedReview = await response.json();
    dispatch(recieveReview(updatedReview));
    return response;
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });
    dispatch(removeReview(reviewId));
    return response;
}

const reviewReducer = (state = {}, action) => {
    const newState = {...state};
    switch (action.type) {
        case RECIEVE_REVIEWS:
            return {...state, ...action.reviews};
        case RECIEVE_REVIEW:
            debugger
            newState[action.review.id] = action.review;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return newState;
    }
}

export default reviewReducer;
