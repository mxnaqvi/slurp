export const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS';

const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

export const getBusinesses = (store) => {
    if (store.businesses) {
        return Object.values(store.businesses);
    } else  {
       return []
    }
}

export const getBusiness = (businessId) => (store) => {
    console.log(businessId)
    // debugger
    if (store.businesses) {
        return store.businesses[businessId];
    } else {
        return null;
    }
}

export const fetchBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/businesses');
    const data = await response.json();
    console.log(data);
    dispatch(receiveBusinesses(data));
}

export const fetchBusiness = (businessId) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${businessId}`);
    // debugger
    const data = await response.json();
    console.log(data);
    dispatch(receiveBusiness(data));
}

const businessReducer = ( state = {}, action ) => {
    Object.freeze(state);
    const newState = { ...state };

    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return { ...newState, ...action.businesses };
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        default: 
            return state;
    }
}

export default businessReducer;